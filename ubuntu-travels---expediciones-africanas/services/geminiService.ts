import { GoogleGenAI, Type } from "@google/genai";
import { AIPlannerResponse } from "../types";

// Initialize the AI client safely
// The API key is guaranteed to be in process.env.API_KEY by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTravelItinerary = async (
  preferences: string,
  duration: string,
  budget: string
): Promise<AIPlannerResponse | null> => {
  try {
    const model = "gemini-2.5-flash";
    
    const prompt = `
      Actúa como un experto agente de viajes de lujo especializado en África.
      Crea un itinerario de viaje detallado y emocionante basado en las siguientes preferencias del usuario:
      - Intereses/Sueños: ${preferences}
      - Duración: ${duration} días
      - Presupuesto: ${budget}

      El itinerario debe ser lógicamente posible geográficamente.
      El tono debe ser inspirador, evocador y profesional.
      Responde EXCLUSIVAMENTE en español.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tripName: {
              type: Type.STRING,
              description: "Un nombre creativo y evocador para el viaje (ej. 'Safari al Amanecer en Serengeti')."
            },
            estimatedCost: {
              type: Type.STRING,
              description: "Un rango estimado de costo por persona basado en el nivel de lujo solicitado."
            },
            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.STRING, description: "Día 1, Día 2, etc." },
                  title: { type: Type.STRING, description: "Título breve de la actividad principal del día." },
                  description: { type: Type.STRING, description: "Descripción narrativa de 2-3 oraciones sobre lo que harán." },
                  highlight: { type: Type.STRING, description: "Una palabra o frase corta destacada (ej. 'Cena bajo las estrellas')." }
                },
                required: ["day", "title", "description", "highlight"]
              }
            }
          },
          required: ["tripName", "days", "estimatedCost"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AIPlannerResponse;
    }
    return null;

  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw error;
  }
};