import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to CeliacCheck</Text>
      <Button
        title="Go to Symptom Tracker"
        onPress={() => navigation.navigate('Symptom Tracker')}
      />
    </View>
  );
};

export default HomeScreen;
