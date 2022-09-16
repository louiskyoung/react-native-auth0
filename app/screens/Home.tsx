import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  accessToken: string;
  handleLogout: () => void;
}

const Container = styled(View)`
  flex: 1;
  justify-content: space-evenly;
`;

const Title = styled(Text)`
  font-size: 20px;
  color: white;
  text-align: center;
`;

function Home({ handleLogout, accessToken }: Props) {
  return (
    <Container>
      <Title>Your access token is {accessToken}</Title>
      <Button title={'Log out'} onPress={handleLogout} color="red" />
    </Container>
  );
}

export default Home;
