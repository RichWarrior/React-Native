import React, { Component } from 'react';
import { createStore } from 'redux';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';

const initialStore = {
  count: 2
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { count: state.count - 1 }
    case 'DECRASE_COUNTER':
      return { count: state.count + 1 }
  }
  return state;
}

const store = createStore(reducer)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}


