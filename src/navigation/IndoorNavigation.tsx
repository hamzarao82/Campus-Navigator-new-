import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationMap } from '../components/NavigationMap';
import { NavigationCompass } from '../components/NavigationCompass';
import { FloorSelector } from '../components/FloorSelector';
import { POIMarker } from '../components/POIMarker';
import { useIndoorNavigation } from '../hooks/useIndoorNavigation';
import { LoadingState } from '../components/LoadingState';

export const IndoorNavigation: React.FC = () => {
  const { 
    location,
    heading,
    floor,
    loading,
    setFloor,
    nearbyPOIs
  } = useIndoorNavigation();

  if (loading) {
    return <LoadingState />;
  }

  return (
    <View style={styles.container}>
      <NavigationMap location={location} heading={heading}>
        {nearbyPOIs.map(poi => (
          <POIMarker key={poi.id} poi={poi} />
        ))}
      </NavigationMap>
      <NavigationCompass heading={heading} />
      <FloorSelector currentFloor={floor} onFloorChange={setFloor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
