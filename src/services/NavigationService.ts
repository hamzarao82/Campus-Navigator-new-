import { IndoorAtlasModule } from '../modules/IndoorAtlasModule';
import { POI } from '../types/navigation';

export class NavigationService {
  static async startNavigation(destination: POI) {
    try {
      await IndoorAtlasModule.startNavigation({
        destinationId: destination.id,
        floor: destination.floor,
        coordinates: {
          x: destination.x,
          y: destination.y
        }
      });
    } catch (error) {
      console.error('Navigation failed to start:', error);
      throw error;
    }
  }

  static async stopNavigation() {
    try {
      await IndoorAtlasModule.stopNavigation();
    } catch (error) {
      console.error('Failed to stop navigation:', error);
      throw error;
    }
  }

  static async recalculateRoute() {
    try {
      await IndoorAtlasModule.recalculateRoute();
    } catch (error) {
      console.error('Failed to recalculate route:', error);
      throw error;
    }
  }
}
