import React, { useEffect, useRef } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { logoutUser } from '../services/authService';
import logo from '../assets/logo2.png'; // ✅ logo path

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // initial opacity 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // fade to fully visible
      duration: 1500, // 1.5 seconds
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        Alert.alert('Logged out', 'You have been signed out.');
        navigation.navigate('Login'); // Redirect to Login screen
      }
    } catch (error) {
      Alert.alert('Error', 'Logout failed.');
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      {/* ✅ Animated logo */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image source={logo} style={{ width: 120, height: 120, marginBottom: 20, alignSelf: 'center' }} />
      </Animated.View>

      <Text style={globalStyles.title}>Technician Marketplace</Text>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={globalStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={globalStyles.buttonText}>Search Technicians</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={globalStyles.buttonText}>View Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleLogout}
      >
        <Text style={globalStyles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
