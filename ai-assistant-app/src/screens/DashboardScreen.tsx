import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import VoiceActionButton from '../components/VoiceActionButton';
import useVoiceControl from '../hooks/useVoiceControl';

const DashboardScreen = () => {
  const { isListening, startListening, stopListening } = useVoiceControl();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>AI Assistant</Text>
        <Card title="Welcome">
          <Text>Hello! I am your AI assistant. How can I help you today?</Text>
        </Card>
        <Card title="Quick Actions">
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
        </Card>
      </ScrollView>
      <View style={styles.voiceButtonContainer}>
        <VoiceActionButton
          onPress={isListening ? stopListening : startListening}
          isListening={isListening}
        />
      </View>
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
  voiceButtonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});

export default DashboardScreen;
