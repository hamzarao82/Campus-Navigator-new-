import { useState, useEffect } from 'react';
import { Location } from '../types/navigation';
import { useIndoorNavigation } from './useIndoorNavigation';

type NavigationMode = 'walking' | 'transit';

export const useNavigation = () => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [mode, setMode] = useState<NavigationMode>('walking');
  const { location: indoorLocation } = useIndoorNavigation();

  useEffect(() => {
    if (indoorLocation) {
      setCurrentLocation({
        x: indoorLocation.x,
        y: indoorLocation.y,
        floor: indoorLocation.floor,
        accuracy: 0,
        timestamp: Date.now()
      });
    }
  }, [indoorLocation]);

  const startNavigation = (dest: Location) => {
    setDestination(dest);
  };

  const stopNavigation = () => {
    setDestination(null);
  };

  return {
    currentLocation,
    destination,
    mode,
    setMode,
    startNavigation,
    stopNavigation
  };
};
