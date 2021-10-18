import React from 'react';

import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';

// import DiscordImg from '../../assets/discord.png';

import { Container, Title, IconWrapper, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  source: ImageSourcePropType;
}

export function ButtonIcon({ title, source,...rest } : Props){
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={source} accessibilityLabel="botao"/>
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  )
}