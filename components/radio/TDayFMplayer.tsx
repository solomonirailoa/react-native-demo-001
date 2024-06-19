import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export default function TDayFMplayer() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://peridot.streamguys1.com:7155/2Day' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 123,
    height: 144
  },
});
