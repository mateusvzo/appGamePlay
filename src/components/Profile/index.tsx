import React from 'react';
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