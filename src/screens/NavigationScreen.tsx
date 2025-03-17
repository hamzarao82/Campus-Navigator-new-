import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { NavigationToggle } from '../components/NavigationToggle';
import { NavigationMode } from '../types/navigation';
import { IndoorNavigation } from '../components/IndoorNavigation';
import { useIndoorNavigation } from '../hooks/useIndoorNavigation';
import { THEME } from '../config/constants';

export default function NavigationScreen() {
  const [mode, setMode] = useState<NavigationMode>(NavigationMode.OUTDOOR);
  const { isIndoorAvailable, currentBuilding } = useIndoorNavigation();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <NavigationToggle
        mode={mode}
        onModeChange={setMode}
        isIndoorAvailable={isIndoorAvailable}
      />
      
      {mode === NavigationMode.OUTDOOR ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={region}
          showsUserLocation
          showsMyLocationButton
        >
          {/* Add markers here */}
        </MapView>
      ) : (
        <IndoorNavigation building={currentBuilding} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
