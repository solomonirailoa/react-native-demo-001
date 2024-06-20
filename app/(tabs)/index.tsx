import { Button, Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#2C464E', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/photography/fbcHome.jpg')}
          style={{width:'100%', height:'100%'}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to FBC!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Fijian Broadcasting Corporation</ThemedText>
        <ThemedText>
          We strive to providing quality content to all Fijians. 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Leading the way</ThemedText>
        <ThemedText>
          We pave the road towards a successful media platform.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Get started</ThemedText>
        <ThemedText>
          Use the navigation below to read the latest and trustworthy news, access our clear and live TV stations, live radio stations, apply for advertising, announcement submissions, and more.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
