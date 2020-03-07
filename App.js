import React, {Component} from 'react';
import store from './src/store';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import Todos from './src/components/Todos';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Todos />
        </View>
      </Provider>
    );
  }
}
