export const IndoorAtlasConfig = {
  apiKey: process.env.INDOOR_ATLAS_API_KEY,
  apiSecret: process.env.INDOOR_ATLAS_API_SECRET,
  locationUpdateInterval: 1000,
  headingUpdateInterval: 500,
  useStepDetection: true,
  floorDetectionMode: 'automatic',
  calibrationMode: 'manual',
};
