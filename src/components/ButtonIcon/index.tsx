import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { Container, Title, IconWrapper, Icon } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest } : Props){
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={DiscordImg}/>
      </IconWrapper>

      <Title>{title}</Title>
    </Container>
  )
}