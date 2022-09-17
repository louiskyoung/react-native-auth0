import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  handleLogin: () => void;
};

const Container = styled(View)`
  flex: 1;
  justify-content: space-evenly;
`;

const Title = styled(Text)`
  font-size: 40px;
  color: white;
  text-align: center;
`;

const Subtitle = styled(Text)`
  font-size: 20px;
  color: #888;
  text-align: center;
`;

function Welcome({ handleLogin }: Props) {
  return (
    <Container>
      <Title>Welcome to React Native App</Title>
      <Subtitle>Please login to browse the app.</Subtitle>
      <Button title={'Log In'} onPress={handleLogin} />
    </Container>
  );
}

export default Welcome;
