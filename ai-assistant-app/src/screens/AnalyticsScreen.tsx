import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedBarChart from '../components/AnimatedBarChart';
import Card from '../components/Card';

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analytics</Text>
      <Card title="Usage Statistics">
        <AnimatedBarChart />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
});

export default AnalyticsScreen;
