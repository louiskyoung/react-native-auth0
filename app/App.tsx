import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Auth0 from 'react-native-auth0';

const auth0Config = {
  domain: 'dev-k3rdl0yf.us.auth0.com',
  clientId: 'AdR4LecX3TBlejhcRuDnFKjrU7Gh6qlY',
};
const auth0 = new Auth0(auth0Config);

const App = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile email',
      })
      .then((credentials) => {
        Alert.alert('AccessToken: ' + credentials.accessToken);
        setAccessToken(credentials.accessToken);
      })
      .catch((error) => console.log(error));
  };

  const onLogout = () => {
    auth0.webAuth
      .clearSession({})
      .then(() => {
        Alert.alert('Logged out!');
        setAccessToken(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loggedIn = accessToken !== null;
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      <Text>You are{loggedIn ? ' ' : ' not '}logged in. </Text>
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#124257',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
