import React from 'react';

import { ButtonIcon } from '../../components/ButtonIcon';

import Illustration from '../../assets/illustration.png';

import { Container, Image, Content, Title, SubTitle } from './styles';
export function Signin() {
  return (
    <Container>
      <Image source={Illustration}/>

      <Content>
        <Title>
          Conecte-se {`\n`}
          e organize suas{`\n`}
          jogatinas
        </Title>

        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos.
        </SubTitle>

        <ButtonIcon
          source={require('../../assets/discord.png')} 
          title="Entrar com o Discord"
          activeOpacity={0.7}
        />
        <ButtonIcon
          source={require('../../assets/google1.png')} 
          title="Entrar com o Gmail"
          activeOpacity={0.7}
        />

      </Content>
    </Container>
  )
}