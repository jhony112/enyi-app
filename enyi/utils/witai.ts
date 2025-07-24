const WIT_AI_TOKEN = 'SV4MN4NNTM3XTJX6JXA7N7IBR4L7O3WM';

import { Audio } from 'expo-av';

export const textToSpeech = async (text: string) => {
  const response = await fetch('https://api.wit.ai/synthesize?v=20240304', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${WIT_AI_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'audio/mpeg3',
    },
    body: JSON.stringify({
      q: text,
      voice: 'wit$Rebecca',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to synthesize speech');
  }

  const blob = await response.blob();
  const uri = URL.createObjectURL(blob);

  const { sound } = await Audio.Sound.createAsync({ uri });
  await sound.playAsync();
};
