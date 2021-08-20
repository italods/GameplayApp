import React, { useState, useEffect } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import { 
  ImageBackground, 
  Text, 
  View,
  Alert,
  FlatList
} from 'react-native';

import { styles } from './styles';
import { api } from '../../service/api';
import { theme } from '../../global/styles/theme';

import BannerImg from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { Member, MemberProps } from '../../components/Member';
import { AppointmentProps } from '../../components/Appointment';
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);
    } catch {
      Alert.alert('Verifique as configurações do servidor. Será que o widget está habilitado ?');
    } finally {
      setLoading(false);
    }
  }

  useEffect (() => {
    fetchGuildWidget();
  },[]);

  return(
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            { guildSelected.guild.name }
          </Text>  
          <Text style={styles.subtitle}>
            { guildSelected.description }
          </Text>
        </View>
      </ImageBackground>

      {
        
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member data={item}/>
            )}
            ItemSeparatorComponent={()=> <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }


      
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na Partida"/>
      </View>
    </Background>
  )
};