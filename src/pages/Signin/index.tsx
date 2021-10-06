import React from 'react';

import { StatusBar } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import Illustration from '../../assets/illustration.png';

import { Container, Image, Content, Title, SubTitle } from './styles';
export function Signin() {
  return (
    <Container>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image source={Illustration}/>

      <Content>
        <Title>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos.
        </SubTitle>

        <ButtonIcon 
          title="Entrar com o Discord"
          activeOpacity={0.7}
        />

      </Content>
    </Container>
  )
}