/**
 * Created by swapnils on 09/03/18.
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Header
} from 'react-native-elements';
import Styles from './../styles/Styles';

const IrkfdbHeader = () => {
    return (
        <Header
            centerComponent={{ text: 'IRKFDB APP' }}
            backgroundColor='#bf360c'
        />
    );
};

export default IrkfdbHeader;