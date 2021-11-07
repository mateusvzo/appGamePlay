import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export const Container = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const AvatarImage = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`;