import { StyleSheet, Image, Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import GoldFMplayer from '@/components/radio/GoldFMplayer';
import BulaFMplayer from '@/components/radio/BulaFMplayer';
//import MusicPlayer from '@/components/MusicPlayer';

export default function RadioTab() {
   return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/photography/fbcRadio.webp')}
          style={{width:'100%', height:'100%'}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Radio</ThemedText>
      </ThemedView>
      <ThemedText>Fijians only love tuning in to our 6 radio stations.</ThemedText>
      <Collapsible title="Radio Fiji 1">
        <ThemedText>
          Na domoi Viti
        </ThemedText>
      </Collapsible>
      <Collapsible title="Radio Fiji 2">
        <ThemedText>
          Desh ki dhadkan.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Gold FM">
        <ThemedText>
          Only the classic hits.
        </ThemedText>
        <Image 
          source={require('@/assets/images/brands/goldFM.png')} 
          style={{ alignSelf: 'center', width:'70%', height:'34%'}} 
        />
        <GoldFMplayer></GoldFMplayer>
      </Collapsible>
      <Collapsible title="Bula FM">
        <ThemedText>
          Naba dua e na sere
        </ThemedText>
        <Image 
          source={require('@/assets/images/brands/bulaFM.png')} 
          style={{ alignSelf: 'center', width:'70%', height:'37%'}} 
        />
        <BulaFMplayer></BulaFMplayer>
      </Collapsible>
      <Collapsible title="Mirchi FM">
        <ThemedText>
          It's hot
        </ThemedText>
      </Collapsible>
      <Collapsible title="2Day FM">
        <ThemedText>
          Today's hit music. 2DayFM rocks!
        </ThemedText>
        <ThemedText> </ThemedText>
        
      </Collapsible>
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
