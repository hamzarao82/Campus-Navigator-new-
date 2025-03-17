export enum NavigationMode {
  OUTDOOR = 'outdoor',
  INDOOR = 'indoor'
}

export interface Location {
  latitude: number;
  longitude: number;
  building?: string;
  floor?: number;
}
