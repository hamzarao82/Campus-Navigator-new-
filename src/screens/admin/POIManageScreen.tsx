import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MapPin, Plus } from 'lucide-react';
import { useFirestore } from '../../hooks/useFirestore';
import { THEME } from '../../config/constants';

export default function POIManageScreen() {
  const [points, setPoints] = useState([]);
  const { fetchPOIs, addPOI, deletePOI } = useFirestore();
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    loadPOIs();
  }, []);

  const loadPOIs = async () => {
    const data = await fetchPOIs();
    setPoints(data);
  };

  const handleMapPress = (e) => {
    setSelectedLocation(e.nativeEvent.coordinate);
  };

  const handleAddPOI = async () => {
    if (selectedLocation) {
      await addPOI({
        ...selectedLocation,
        name: 'New POI',
        type: 'default'
      });
      loadPOIs();
      setSelectedLocation(null);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={handleMapPress}
        showsUserLocation
      >
        {points.map((point) => (
          <Marker
            key={point.id}
            coordinate={{
              latitude: point.latitude,
              longitude: point.longitude
            }}
            title={point.name}
          />
        ))}
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            pinColor="blue"
          />
        )}
      </MapView>

      {selectedLocation && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddPOI}
        >
          <Plus color={THEME.colors.white} size={24} />
        </TouchableOpacity>
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: THEME.colors.primary,
    padding: 16,
    borderRadius: 50,
    elevation: 5,
  },
});
