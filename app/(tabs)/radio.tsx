import { StyleSheet, Image, Button, AppRegistry, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Icon from 'react-native-vector-icons/FontAwesome';

import TrackPlayer, { useTrackPlayerEvents, Event, Capability, RepeatMode, usePlaybackState, State, useIsPlaying } from 'react-native-track-player';
import { useState } from 'react';
AppRegistry.registerComponent("FBC Radio", ()=>RadioTab);
import { PlaybackService } from '@/services/PlaybackService';
import { getPlaybackState } from 'react-native-track-player/lib/src/trackPlayer';
TrackPlayer.registerPlaybackService(() => PlaybackService);

const track1 = {
  url: 'https://peridot.streamguys1.com:7155/RFOne', // Load media from the network
  title: 'Radio Fiji 1',
  artist: 'RF1',
  album: 'Na domoi Viti',
  genre: 'iTaukei classic music',
  date: '2024-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/radioFiji1.jpg'),
  duration: 1234 // Duration in seconds
};
const track2 = {
  url: 'https://peridot.streamguys1.com:7155/RFTwo', // Load media from the network
  title: 'Radio Fiji 2',
  artist: 'RF2',
  album: 'Desh ki Dhadkan',
  genre: 'Hindi classic music',
  date: '2024-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/radioFiji2.jpg'),
  duration: 402 // Duration in seconds
};
const track3 = {
  url: 'https://peridot.streamguys1.com:7155/Bula', // Load media from the network
  title: 'Bula FM',
  artist: 'BulaFM',
  album: 'Naba dua e na sere',
  genre: 'iTaukei latest music',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/bulaFM.png'),
  duration: 402 // Duration in seconds
};
const track4 = {
  url: 'https://peridot.streamguys1.com:7155/Gold', // Load media from the network
  title: 'Gold FM',
  artist: 'GoldFM',
  album: 'Only the classic hits',
  genre: 'English classics and oldies',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/goldFM.png'),
  duration: 402 // Duration in seconds
};
const track5 = {
  url: 'https://peridot.streamguys1.com:7155/Mirchi', // Load media from the network
  title: 'Mirchi FM',
  artist: 'MirchiFM',
  album: 'It\'s hot',
  genre: 'Hindi latest music',
  date: '2024-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/mirchiFM.png'),
  duration: 402 // Duration in seconds
};
const track6 = {
  url: 'https://peridot.streamguys1.com:7155/2Day', // Load media from the network
  title: '2Day FM',
  artist: '2DayFM',
  album: 'Today\'s hit music',
  genre: 'English latest music',
  date: '2024-05-20T07:00:00+00:00', // RFC 3339
  artwork: require('../../assets/images/brands/2dayFM.png'),
  duration: 402 // Duration in seconds
};

const radioStationsStreamList = [track1, track2, track3, track4, track5, track6];

const setupRNTP = async () => {
  console.log("Setting up RNTP");
  await TrackPlayer.setupPlayer({});
  console.log("Loading the audio stream");
  await TrackPlayer.add(radioStationsStreamList);
  console.log("Done. Loaded the audio stream. Ready to play.");
  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};  

TrackPlayer.updateOptions({
  // Media controls capabilities
  capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
  ],

  // Capabilities that will show up when the notification is in the compact form on Android
  compactCapabilities: [Capability.SkipToPrevious, Capability.Play, Capability.Pause, Capability.SkipToNext],
});

console.log("pre-setup");
setupRNTP();
console.log("post-setup");

export default function RadioTab() {  
  
  const [trackTitle, setTrackTitle] = useState<string>();
  const [trackArtwork, setTrackArtwork] = useState<any>();

  // do initial setup, set initial trackTitle..
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      
      let ss = getPlaybackState();
      console.log(ss);
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackArtwork(track?.artwork);
      const {title} = track || {};
      setTrackTitle(title);
    
  });

  async function handlePlayPress() {
    if(await TrackPlayer.getState() == State.Playing) {
      TrackPlayer.pause();
    }
    else {
      TrackPlayer.play();
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/photography/fbcRadio.webp')}
          style={{width:'100%', height:'100%'}}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Radio</ThemedText>
      </ThemedView>
      <ThemedText>Fijians only love tuning in to our 6 radio stations.</ThemedText>
      <ThemedText>Current station playing: {trackTitle}</ThemedText>
      <View style={{alignItems: 'center', alignContent: 'center'}} >
        <Image 
          source={trackArtwork}
          style={{width:248, height:108}}
        />
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}} >
            <Icon.Button
              name="arrow-left"
              size={28}
              backgroundColor="transparent"
              onPress={() => TrackPlayer.skipToPrevious()}/>
            <Icon.Button
              name={useIsPlaying().playing?"pause":"play"}
              size={38}
              backgroundColor="transparent"
              onPress={handlePlayPress}/>
            <Icon.Button
              name="arrow-right"
              size={28}
              backgroundColor="transparent"
              onPress={() => TrackPlayer.skipToNext()}/>
        </View>
      </View>
      
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  blackBGcolor: {
    backgroundColor: "black",
  },
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
  webviewContainer: {
    width: "100%",
    height: 558,
    padding: 0,
    margin: 0,
    backgroundColor: '#00000000',
  },
});
