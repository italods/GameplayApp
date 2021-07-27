import React, { useState } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { 
  Text, 
  View,
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { CategorySelect } from '../../components/CategorySelect';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';


export function AppointmentCreate(){
  const [category, setCategory] = useState('');

  return(
    <Background>
      <Header
        title="Agendar Partida" 
      />
      
      <Text style={styles.label}>
        Categoria
      </Text>

      <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            
          </View>
        </RectButton>

      </View>

    </Background>
  )
};