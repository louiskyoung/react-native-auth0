# REACT NATIVE APP USING AUTH0

We have web api published on Azure, secured by JWT. We use Auth0 for user management and generation of access tokens. As our only test, we’d like to ask you to create a one-page React Native mobile app, which authenticates the user on Auth0, grabs access token and calls the API using it. You will then present the data – Jason content - by simply printing it on the screen or putting it in a table. Once you completed the code, you will share your screen with us and take us through it.

## To Install

Clone the repository and install the dependencies:

```bash
yarn install
```

OR

```bash
npm install
```

### iOS Applications only

Change the directory into the `ios` folder and run the following command to install the SDK pod with [CocoaPods](https://cocoapods.org/):

```bash
cd ios
pod install
```

## To Run The App

Run your app on an emulator, simulator, or your own connected device.

- To run the app on Android run `yarn android` or `npm run android`.
- To the app on iOS run `yarn ios` or `npm run ios`.
