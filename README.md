# A working example for refrencing React Native nested screens


#### Includes:
* animated log-in screen 
* native implemetaion of the react-native-paper
* log-in log-out functionality

---
## Docs


### Contexts | Reducers
* __AuthContext__ - just useful to simulate the login / logout process
```typescriptreact
export const AuthContext = createContext({
    state: initialAuthState as authState,
    dispatch: ({type, payload}: authAction) => {},
});
```
* __authState__ properties: `isLoggedIn` and `isLoading`
```typescriptreact
export type authState = {
    isLoading: boolean,
    isLoggedIn: boolean,
}
```
* __authAction__ properties: passed to the reducer
```typescriptreact
// type = field to update
// payload = new value
export type authAction = 
      {type: 'setIsLoading', payload: boolean}
    | {type: 'setIsLoggedIn', payload: boolean};
```


### Screens | Stack Navigators
| Location | Description |
|----------|-------------|
| [Individual Screen's](./navigation/screens) | Where the individual screens are located |
| [Wrapped Screen's](./navigation/stacks) | Where the stacks of screen's are located which wrap the _individual_ screens |
| [Splash Screen](./navigation/screens/Splash.tsx) | The loading screen |
| [Tab Navigator Stack](./navigation/screens/HomeScreen.tsx) | The _Home Screen_ which is Tab Stack Navigator of the wrapped screens |   |

### Dependencies
* icons
```bash
yarn add @expo/vector-icons react-native-vector-icons
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
* animated bottom bar (not yet externally needed)
```bash 
yarn add -D ...
```




