import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AdvertiseTab() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/photography/fbcAdvertise.jpg')}
          style={{width:'100%', height:'100%'}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Advertise</ThemedText>
      </ThemedView>
      <ThemedText>Boost your public presence and engagement with us and stay ahead of the pack</ThemedText>
      <ThemedText>Discover how we can connect your brand with our engaged and unique audience to leave an unforgettable impression. </ThemedText>
      
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
