import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import IrkfdbApp from './src/components/IrkfdbApp';
import Store from './src/Store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <IrkfdbApp />
            </Provider>
        );
    }
}