import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { MapAccessDenied } from './MapAccessDenied';
import { useAuth } from '../hooks/useAuth';

interface Props {
  location: { x: number; y: number };
  heading: number;
  children?: React.ReactNode;
}

export const NavigationMap: React.FC<Props> = ({ location, heading, children }) => {
  const { user } = useAuth();

  if (!user?.hasMapAccess) {
    return <MapAccessDenied />;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.x,
          longitude: location.y,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        showsUserLocation
        followsUserLocation
        showsCompass
        rotateEnabled
        heading={heading}
      >
        {children}
      </MapView>
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
