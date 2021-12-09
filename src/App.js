import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
  apiKey: 'AIzaSyAoKzGZZS6zkOugJ0c6XUq-PC2NKrmbuj8',
  authDomain: 'manager-a67e7.firebaseapp.com',
  databaseURL: 'https://manager-a67e7.firebaseio.com',
  projectId: 'manager-a67e7',
  storageBucket: 'manager-a67e7.appspot.com',
  messagingSenderId: '539223164430'
};
firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
            <Router />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1
  }
});

export default App;
