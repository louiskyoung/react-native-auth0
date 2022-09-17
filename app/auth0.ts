import Auth0 from 'react-native-auth0';

const auth0Config = {
  domain: 'dev-k3rdl0yf.us.auth0.com',
  clientId: 'AdR4LecX3TBlejhcRuDnFKjrU7Gh6qlY',
};

export const auth0Service = new Auth0(auth0Config);
