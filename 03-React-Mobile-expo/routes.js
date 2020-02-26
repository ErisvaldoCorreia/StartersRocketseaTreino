import { createStackNavigator } from 'react-navigation';

import Main from './src/main';

export default createStackNavigator({
    Main,
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#4f158a',
        },
        headerTintColor: '#fff'
      }
});