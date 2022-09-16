import React, { useState } from 'react';
import Auth0 from 'react-native-auth0';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import Welcome from './screens/Welcome';
import Home from './screens/Home';

const auth0Config = {
  domain: 'dev-k3rdl0yf.us.auth0.com',
  clientId: 'AdR4LecX3TBlejhcRuDnFKjrU7Gh6qlY',
};
const auth0 = new Auth0(auth0Config);

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
    auth0.webAuth
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
    auth0.webAuth
      .clearSession({})
      .then(() => {
        setAccessToken(null);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }

  return (
    <AppLayout>
      <ActivityIndicator size="large" animating={isLoading} />
      {!isLoading &&
        (isLoggedIn ? (
          <Home handleLogout={handleLogout} />
        ) : (
          <Welcome handleLogin={handleLogin} />
        ))}
    </AppLayout>
  );
}

export default App;
