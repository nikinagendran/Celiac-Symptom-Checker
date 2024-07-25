import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const SymptomTrackerScreen = () => {
  const [symptom, setSymptom] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [symptomCounts, setSymptomCounts] = useState([]);

  const addSymptom = () => {
    if (symptom.trim()) {
      setSymptoms([...symptoms, { key: symptom }]);
      setSymptomCounts([...symptomCounts, symptoms.length + 1]);
      setSymptom('');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Log your symptoms</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter symptom"
        value={symptom}
        onChangeText={setSymptom}
      />
      <Button title="Add Symptom" onPress={addSymptom} />
      <FlatList
        data={symptoms}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
      <LineChart
        data={{
          labels: symptoms.map((_, index) => (index + 1).toString()),
          datasets: [
            {
              data: symptomCounts,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default SymptomTrackerScreen;
