/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { enableFreeze } from "react-native-screens";

// avoid unnecessary re-renders of parts of the app that are not visible[react-freeze]
enableFreeze(true);

AppRegistry.registerComponent(appName, () => App);
