export default {
  expo: {
    name: "Campus Navigator",
    slug: "campus-navigator",
    version: "1.0.0",
    orientation: "portrait",
    icon: ".assets/icon.svg",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/your-project-id"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yourcompany.campusnavigator",
      config: {
        usesNonExemptEncryption: false
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.svg",
        backgroundColor: "#FFFFFF"
      },
      package: "com.yourcompany.campusnavigator",
      permissions: [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    },
    plugins: [
      "expo-location",
      "expo-sensors"
    ],
    extra: {
      eas: {
        projectId: "your-project-id"
      }
    },
    runtimeVersion: {
      policy: "sdkVersion"
    }
  }
}
