import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import useVoiceControl from '../hooks/useVoiceControl';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const { isListening, startListening, stopListening, recognizedText, speak } = useVoiceControl();

  useEffect(() => {
    speak("Hello! What's your name?");
  }, []);

  useEffect(() => {
    if (recognizedText) {
      setName(recognizedText);
    }
  }, [recognizedText]);

  const handleContinue = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      navigation.navigate('Main');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your name?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.voiceButton} onPress={isListening ? stopListening : startListening}>
          <LottieView
            source={require('../assets/animations/listening.json')}
            autoPlay
            loop={isListening}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.keyboardButton} onPress={() => Keyboard.dismiss()}>
          <Text>⌨️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  voiceButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 50,
  },
  keyboardButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 50,
  },
  continueButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OnboardingScreen;
