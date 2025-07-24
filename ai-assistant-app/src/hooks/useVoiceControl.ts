import { useState, useEffect } from 'react';
import Voice from 'react-native-voice';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const useVoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    Voice.onSpeechResults = (e) => {
      setRecognizedText(e.value[0]);
      handleCommand(e.value[0]);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  const speak = async (text) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob` },
      { shouldPlay: true }
    );
  };

  const handleCommand = (command) => {
    if (command.toLowerCase().includes('dashboard')) {
      navigation.navigate('Dashboard');
      speak('Navigating to Dashboard');
    } else if (command.toLowerCase().includes('analytics')) {
      navigation.navigate('Analytics');
      speak('Navigating to Analytics');
    } else {
      speak("I'm sorry, I don't understand that command.");
    }
  };

  return {
    isListening,
    recognizedText,
    startListening,
    stopListening,
    speak,
  };
};

export default useVoiceControl;
