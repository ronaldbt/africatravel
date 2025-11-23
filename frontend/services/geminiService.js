import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateTravelItinerary = async (
  preferences,
  duration,
  budget
) => {
  try {
    // Initialize with a placeholder API key for now
    // In a real app, this would come from runtime config or environment variables
    const apiKey = useRuntimeConfig().public.geminiApiKey || 'demo-key'
    
    if (apiKey === 'demo-key') {
      // Return a mock response for demo purposes
      return {
        tripName: "Expedición Ubuntu: África Salvaje",
        estimatedCost: "Desde $8,500",
        days: [
          {
            day: "Día 1",
            title: "Llegada a Serengeti",
            description: "Bienvenida en el aeropuerto de Arusha y traslado en avioneta privada al corazón del Serengeti. Instalación en lodge exclusivo con vistas panorámicas.",
            highlight: "Primer Safari"
          },
          {
            day: "Día 2", 
            title: "Gran Migración",
            description: "Safari matutino siguiendo la gran migración de ñus. Almuerzo gourmet en la sabana con vista a manadas infinitas.",
            highlight: "Migración Épica"
          },
          {
            day: "Día 3",
            title: "Cráter Ngorongoro", 
            description: "Descenso al cráter del Ngorongoro, considerado el Jardín del Edén africano. Encuentros con los Big Five en un paisaje volcánico único.",
            highlight: "Jardín del Edén"
          }
        ]
      }
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    
    const prompt = `
      Actúa como un experto agente de viajes de lujo especializado en África.
      Crea un itinerario de viaje detallado y emocionante basado en las siguientes preferencias del usuario:
      - Intereses/Sueños: ${preferences}
      - Duración: ${duration} días
      - Presupuesto: ${budget}

      El itinerario debe ser lógicamente posible geográficamente.
      El tono debe ser inspirador, evocador y profesional.
      Responde EXCLUSIVAMENTE en español.
      
      Formato de respuesta JSON:
      {
        "tripName": "Nombre creativo del viaje",
        "estimatedCost": "Costo estimado",
        "days": [
          {
            "day": "Día X",
            "title": "Título del día",
            "description": "Descripción detallada",
            "highlight": "Momento destacado"
          }
        ]
      }
    `

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()
    
    // Try to extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
    
    return null

  } catch (error) {
    console.error("Error generating itinerary:", error)
    throw error
  }
}

