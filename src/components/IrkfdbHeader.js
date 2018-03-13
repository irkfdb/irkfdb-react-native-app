/**
 * Created by swapnils on 09/03/18.
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from './../styles/Styles';

const IrkfdbHeader = () => {
    return (
        <View style={Styles.headerContainer}>
            <Text style={Styles.headerText}>
                IRKFDB APP
            </Text>
        </View>
    );
};

export default IrkfdbHeader;