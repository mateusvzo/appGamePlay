import React from 'react';
import { Avatar } from '../Avatar';
import { 
  Container,
  Content,
  User,
  Greeting,
  UserName,
  Message
} from './styles';

export function Profile(){
  return (
    <Container>
        <Avatar 
          urlImage= 'https://avatars.githubusercontent.com/u/56977047?v=4'
        />
      <Content>
        <User>
          <Greeting>
            Ola!
          </Greeting>
          <UserName>
            John
          </UserName>
        </User>
        <Message>
          Hoje é dia de vitória
        </Message>
      </Content>
    </Container>
  );
}