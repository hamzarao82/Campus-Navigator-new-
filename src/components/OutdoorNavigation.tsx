import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { REACT_APP_GOOGLE_MAPS_API_KEY } from '@env';

interface Props {
  origin?: { lat: number; lng: number };
  destination?: { lat: number; lng: number };
  mode?: 'driving' | 'walking' | 'bicycling' | 'transit';
}

export const OutdoorNavigation: React.FC<Props> = ({ 
  origin, 
  destination, 
  mode = 'walking' 
}) => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    if (origin && destination) {
      const url = `https://www.google.com/maps/embed/v1/directions?key=${REACT_APP_GOOGLE_MAPS_API_KEY}&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&mode=${mode}`;
      setMapUrl(url);
    } else {
      const url = `https://www.google.com/maps/embed/v1/view?key=${REACT_APP_GOOGLE_MAPS_API_KEY}&center=40.7128,-74.0060&zoom=12`;
      setMapUrl(url);
    }
  }, [origin, destination, mode]);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: mapUrl }}
        style={styles.map}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
