import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const VoiceActionButton = ({ onPress, isListening }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LottieView
        source={require('../assets/animations/listening.json')}
        autoPlay
        loop
        style={{ width: 100, height: 100 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default VoiceActionButton;
