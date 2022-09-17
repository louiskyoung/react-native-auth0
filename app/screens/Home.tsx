import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

import UserInfo from '../components/UserInfo';
import { auth0Service } from '../auth0';

type Props = {
  accessToken: string;
  handleLogout: () => void;
  setIsLoading: Function;
};

export type User = {
  email: string;
  emailVerified: boolean;
  familyName: string;
  givenName: string;
  name: string;
  nickname: string;
  picture: string;
  updatedAt: string;
};

const Container = styled(View)`
  flex: 1;
  justify-content: space-evenly;
`;

const Title = styled(Text)`
  font-size: 21px;
  color: white;
  text-align: center;
`;

const Buttons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

function Home({ accessToken, handleLogout, setIsLoading }: Props) {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  function handleGetUserInfo() {
    setIsLoading(true);
    auth0Service.auth
      .userInfo({ token: accessToken })
      .then(response => {
        setIsLoading(false);
        setUserInfo(response);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <Container>
      {userInfo ? (
        <UserInfo {...userInfo} />
      ) : (
        <Title>Your access token is {accessToken}</Title>
      )}
      <Buttons>
        <Button
          title={'Get user info using your token'}
          onPress={handleGetUserInfo}
        />
        <Button title={'Log out'} onPress={handleLogout} color="red" />
      </Buttons>
    </Container>
  );
}

export { Home };
