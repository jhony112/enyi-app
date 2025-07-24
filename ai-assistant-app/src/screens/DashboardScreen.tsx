import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import VoiceActionButton from '../components/VoiceActionButton';
import useVoiceControl from '../hooks/useVoiceControl';
import QuickActions from '../components/QuickActions';
import LottieView from 'lottie-react-native';

const DashboardScreen = () => {
  const { isListening, isSpeaking, startListening, stopListening } = useVoiceControl();

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>AI Assistant</Text>
        <Card title="Welcome">
          <Text>Hello! I am your AI assistant. How can I help you today?</Text>
        </Card>
        <Card title="Quick Actions">
          <QuickActions />
        </Card>
      </ScrollView>
      {isSpeaking && (
        <LottieView
          source={require('../assets/animations/talking.json')}
          autoPlay
          loop
          style={styles.talkingOrb}
        />
      )}
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
  voiceButtonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  talkingOrb: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
});

export default DashboardScreen;
