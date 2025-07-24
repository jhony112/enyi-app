import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuickActions = () => {
  return (
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.quickActionButton}>
        <Text style={styles.quickActionButtonText}>📊</Text>
        <Text style={styles.quickActionButtonText}>Analytics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.quickActionButton}>
        <Text style={styles.quickActionButtonText}>📰</Text>
        <Text style={styles.quickActionButtonText}>News</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  quickActionButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  quickActionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default QuickActions;
