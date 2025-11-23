export interface ItineraryDay {
  day: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  price: string;
}

export interface AIPlannerResponse {
  tripName: string;
  days: ItineraryDay[];
  estimatedCost: string;
}