
import { View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';

export function Game() {

  const route = useRoute();
  const game = route.params as GameParams;
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}