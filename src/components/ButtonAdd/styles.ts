import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  height: 48px;
  width: 48px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading}
`;