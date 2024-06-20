import { useState } from 'react';
import { View, useColorScheme, Switch } from 'react-native';
import { ThemedText } from './ThemedText';

export default function ToggleSwitchDark () {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [switchOn, setSwitchOn] = useState(isDark);
  if (switchOn){
    console.log("Dark theme: on");
  }else{
    console.log("Dark theme: off");
  }
  
  return (
    <View>
      <ThemedText style={{ color: isDark ? '#fff' : '#000' }}>Current theme: {colorScheme}</ThemedText>
      <ThemedText>Dark theme: </ThemedText><Switch value={switchOn} onValueChange={() => { setSwitchOn(!switchOn)}}/> 
    </View>
  )
}