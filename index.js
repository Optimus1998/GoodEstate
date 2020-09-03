/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppXX from './src/navigation/MainNavigator';
import App2 from './App2';

AppRegistry.registerComponent(appName, () => AppXX);
