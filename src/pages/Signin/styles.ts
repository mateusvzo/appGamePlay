import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary90};
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px 0 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.title700};
  line-height: 40px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${({ theme }) => theme.fonts.title500};
  line-height: 25px;
`;