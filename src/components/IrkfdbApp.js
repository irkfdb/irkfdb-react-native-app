/**
 * Created by swapnils on 09/03/18.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';
import IrkfdbHeader from './IrkfdbHeader';
import IrkfdbBody from './IrkfdbBody';
import Styles from './../styles/Styles';

class IrkfdbApp extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <IrkfdbHeader />
                <IrkfdbBody />
            </View>
        )
    }
}


export default IrkfdbApp;