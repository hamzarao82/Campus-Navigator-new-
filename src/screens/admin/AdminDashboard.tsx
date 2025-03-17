import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Users, Map, Settings, Shield } from 'lucide-react';

export default function AdminDashboard() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Admin Dashboard</Text>
        
        <View className="grid grid-cols-2 gap-4">
          <TouchableOpacity 
            className="bg-white p-4 rounded-xl shadow-sm"
            onPress={() => navigation.navigate('UserManagement')}
          >
            <Users className="text-blue-600 mb-2" size={24} />
            <Text className="font-semibold">User Management</Text>
            <Text className="text-gray-500 text-sm">Manage user access and roles</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-white p-4 rounded-xl shadow-sm"
            onPress={() => navigation.navigate('POIManagement')}
          >
            <Map className="text-green-600 mb-2" size={24} />
            <Text className="font-semibold">POI Management</Text>
            <Text className="text-gray-500 text-sm">Edit points of interest</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-white p-4 rounded-xl shadow-sm"
            onPress={() => navigation.navigate('MapUpdateScreen')}
          >
            <Settings className="text-purple-600 mb-2" size={24} />
            <Text className="font-semibold">Map Updates</Text>
            <Text className="text-gray-500 text-sm">Update campus maps</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            className="bg-white p-4 rounded-xl shadow-sm"
            onPress={() => navigation.navigate('UserPermissionScreen')}
          >
            <Shield className="text-red-600 mb-2" size={24} />
            <Text className="font-semibold">Permissions</Text>
            <Text className="text-gray-500 text-sm">Manage access levels</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
