import React, { useState } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import Welcome from './screens/Welcome';
import { Home } from './screens/Home';
import { auth0Service } from './auth0';

const AppLayout = styled(SafeAreaView)`
  flex: 1;
  background-color: #030720;
  padding: 30px;
`;

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isLoggedIn = accessToken !== null;

  function handleLogin() {
    setIsLoading(true);
    auth0Service.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then(credentials => {
        setAccessToken(credentials.accessToken);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function handleLogout() {
    setIsLoading(true);
    auth0Service.webAuth
      .clearSession({})
      .then(() => {
        setAccessToken(null);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <AppLayout>
      <ActivityIndicator size="large" animating={isLoading} />
      {isLoggedIn ? (
        <Home
          handleLogout={handleLogout}
          accessToken={accessToken}
          setIsLoading={setIsLoading}
        />
      ) : (
        <Welcome handleLogin={handleLogin} />
      )}
    </AppLayout>
  );
}

export default App;
