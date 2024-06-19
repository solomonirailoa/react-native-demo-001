import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export default function BulaFMplayer () {
    return (
        <View style={styles.container}>
            <Button title="Play" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
    },
  });