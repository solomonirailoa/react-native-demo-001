import { StyleSheet, Image, useColorScheme, View, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { WebView } from 'react-native-webview';



export default function RadioTab() {  
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
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
      <WebView
        style={styles.webviewContainer}
        source={{ uri: isDark? 'https://solomonirailoa.github.io/fbcRadio/dark':'https://solomonirailoa.github.io/fbcRadio/light' }}
      ></WebView>
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
