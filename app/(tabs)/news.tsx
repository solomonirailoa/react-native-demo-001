import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NewsTab() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/photography/fbcNews.jpg')}
          style={{width:'100%', height:'100%'}}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">News</ThemedText>
      </ThemedView>
      <ThemedText>Keeping Fijians Connected. You can find the best and trustworthy news over here, from local, regional, to world news.</ThemedText>
      <Collapsible title="Local news">
        <ThemedText>
          Text here, local news.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Regional news">
        <ThemedText>
          News from the Pacific region.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Sports news">
        <ThemedText>
          Sports Local
        </ThemedText>
        <ThemedText>
          Sports International
        </ThemedText>
      </Collapsible>
      <Collapsible title="Weather news">
        <ThemedText>
          The weather today, tomorrow.
        </ThemedText>
      </Collapsible>
      <Collapsible title="International">
        <ThemedText>
          World news
        </ThemedText>
      </Collapsible>
      <Collapsible title="Entertainment">
        <ThemedText>
          Drama alert!
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
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
