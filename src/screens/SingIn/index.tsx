import React from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SingIn(){
  return(
    <View style={styles.container}>
      
      
      <Image 
        source={ IllustrationImg } 
        style={styles.image}  
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>
      </View>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos
      </Text>

      <ButtonIcon 
        title="Entrar com Discord"
        activeOpacity={0.7} //define a opacidade do botão ao clicar 
      />

    </View>
  )
}