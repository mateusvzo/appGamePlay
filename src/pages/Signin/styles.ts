import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background}; 
`

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  color: ${ props => props.theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;