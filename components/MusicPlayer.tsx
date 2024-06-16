import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper'; 
import Sound from 'react-native-sound'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function MusicPlayer () {
  const [sound, setSound] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (sound && !playing) {
      sound.pause(); 
      sound.setCurrentTime(0); 
    }
  }, [sound, playing]);

  const togglePlayback = () => {
    if (sound) {
      if (playing) {
        sound.stop(() => {
          sound.release(); 
          setSound(null); 
          setPlaying(false); 
        });
      } else {
        sound.play(() => {
          sound.release(); 
          setSound(null); 
          setPlaying(false); 
        });
      }
    } else {
      const playlistUrl = 'https://orf-live.ors-shoutcast.at/oe3-q2a';
      const audio = new Sound(playlistUrl, '', error => {
        if (error) {
          console.log('Error loading sound:', error);
        } else {
          audio.play(() => {
            audio.release(); 
            setSound(null); 
            setPlaying(false); 
          });
        }
      });
      setSound(audio); 
      setPlaying(true); 
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/brands/2dayFM.png')} style={styles.logo} />
      <Button
        mode="contained"
        onPress={togglePlayback}
        style={styles.button}
        contentStyle={styles.buttonContent}
        icon={({ color, size }) => (
          <Icon
            name={playing ? 'stop-circle' : 'play-circle'}
            size={size * 2} 
            color={color}
          />
        )}
      >
        {playing ? 'Detener' : 'Reproducir'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    marginTop: 20, 
    padding: 10,
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: 'row-reverse', 
  },
});
