import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { textToSpeech } from '@/utils/witai';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Button, Pressable, StyleSheet, TextInput } from 'react-native';

export default function OnboardingScreen() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [step, setStep] = React.useState(0);
  const [showKeyboard, setShowKeyboard] = React.useState(false);
  const animationRef = React.useRef<LottieView>(null);

  const handleContinue = async () => {
    if (name.trim()) {
      setStep(1);
      await textToSpeech(`Welcome, ${name}! I am Enyi, your personal assistant.`);
    }
  };

  const handleStart = () => {
    router.replace('/(tabs)');
  };

  React.useEffect(() => {
    if (step === 1) {
      animationRef.current?.play();
    }
  }, [step]);

  return (
    <ThemedView style={styles.container}>
      {step === 0 && (
        <>
          <LottieView
            ref={animationRef}
            source={require('@/assets/lottie/siri.json')}
            loop={false}
            style={styles.lottie}
          />
          <ThemedText type="title">What's your name?</ThemedText>
          {showKeyboard ? (
            <TextInput
              style={styles.input}
              placeholder="Your name"
              value={name}
              onChangeText={setName}
              autoFocus
            />
          ) : (
            <Pressable onPress={() => setShowKeyboard(true)}>
              <IconSymbol name="keyboard" size={24} color="black" />
            </Pressable>
          )}
          <Button title="Continue" onPress={handleContinue} />
          <Button title="Skip" onPress={() => router.replace('/(tabs)')} />
        </>
      )}
      {step === 1 && (
        <>
          <LottieView
            ref={animationRef}
            source={require('@/assets/lottie/siri.json')}
            autoPlay
            loop
            style={styles.lottie}
          />
          <ThemedText type="title">Welcome, {name}!</ThemedText>
          <ThemedText>I am Enyi, your personal assistant.</ThemedText>
          <Button title="Get Started" onPress={handleStart} />
        </>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  lottie: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
