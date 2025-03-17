import { useState, useEffect } from 'react';
import { IndoorAtlasModule } from '../modules/IndoorAtlasModule';
import { useFirestore } from './useFirestore';
import { POI } from '../types/navigation';

export const useIndoorNavigation = () => {
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [heading, setHeading] = useState(0);
  const [floor, setFloor] = useState(1);
  const [loading, setLoading] = useState(true);
  const [nearbyPOIs, setNearbyPOIs] = useState<POI[]>([]);
  const { getPOIs } = useFirestore();

  useEffect(() => {
    const initialize = async () => {
      try {
        await IndoorAtlasModule.initialize();
        setLoading(false);
      } catch (error) {
        console.error('Failed to initialize IndoorAtlas:', error);
      }
    };

    initialize();

    const locationSubscription = IndoorAtlasModule.addLocationListener((loc) => {
      setLocation(loc);
    });

    const headingSubscription = IndoorAtlasModule.addHeadingListener((head) => {
      setHeading(head);
    });

    return () => {
      locationSubscription.remove();
      headingSubscription.remove();
      IndoorAtlasModule.cleanup();
    };
  }, []);

  useEffect(() => {
    const fetchNearbyPOIs = async () => {
      const pois = await getPOIs(floor);
      setNearbyPOIs(pois);
    };

    fetchNearbyPOIs();
  }, [floor]);

  return {
    location,
    heading,
    floor,
    loading,
    setFloor,
    nearbyPOIs
  };
};
