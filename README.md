# A working example for refrencing React Native nested screens


#### Includes:
* animated log-in screen 
* native implemetaion of the react-native-paper
* log-in log-out functionality

---
## Docs


### Contexts | Reducers
* _AuthContext_
    * just useful to simulate the login / logout process
* _authState_ properties: `isLoggedIn` and `isLoading`
    * `isLoggedIn` is a boolean
    * `isLoading` is a boolean
* _authAction_ properties: 
```typescriptreact
type: 'isLoggedIn' | 'isLoading'
payload: boolean
```


### Screens
* contain the individual screen
* nested in the stackScreens


### Stack Navigators
* [stacks](./utils/stacks) - Contains the inner stacks of screens for when you
possibly need to navigate to an inner screen
* [tabs](./navigation/stacksgit@github.com:ndonfris/React-Native-authentication-example.git/) - Where the stacks are outermost nested in.


### Dependencies
* icons
```bash
yarn add -D @expo/vector-icons react-native-vector-icons
``` 
* relative links 
```bash
yarn add -D metro-react-native-babel-preset
```
* navigation
```bash
yarn add -D @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs  @react-navigation/material-bottom-tabs  @react-navigation/bottom-tabs @react-native-community/masked-view react-native-screens react-native-gesture-handler
```
* animated splash screen
```bash
 yarn add lottie-react-native
```
* animated bottom bar 
```bash 
yarn add -D ...
not yet externally needed
```



