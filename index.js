/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//첫번째 이름은 앱 이름(pract), 두번째는 App.js를 랜더링 하겠다

AppRegistry.registerComponent(appName, () => App);
