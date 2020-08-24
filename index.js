/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import AppXX from './src/navigation/MainNavigator';
import {LoginScreen} from './src/containers/authen';

AppRegistry.registerComponent(appName, () => LoginScreen);
