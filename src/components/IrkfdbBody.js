/**
 * Created by swapnils on 09/03/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Button
} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import IrkfdbCard from './IrkfdbCard';
import getRandomFact from './../actions/FetchFacts';
import Styles from './../styles/Styles';

class IrkfdbBody extends Component {

    componentDidMount() {
        console.log("component mount");
        this.props.getRandomFact();
    }

    render() {
        console.log("this.props", this.props);
        const {factR} = this.props;
        const facte = (factR.data) ? factR.data.length : "OK";
        console.log("IrkfdbBody factor", factR);
        console.log("IrkfdbBody fact length", facte);
        if (factR.isFetching) {
            return (
                <View style={Styles.bodyContainer}>
                    <Spinner
                        visible={factR.isFetching}
                        textContent="loading..."
                        animation="fade"
                    />
                </View>
            );
        }
        // if (factR.hasError) {
        //     return (
        //         <View style={Styles.bodyContainer}>
        //             <Text>Bad</Text>
        //         </View>
        //     );
        // }
        if (factR.data !== null) {
            return (
                <View style={Styles.bodyContainer}>
                    <IrkfdbCard
                        fact={factR.data}
                    />
                    <Button
                        raised
                        onPress={this.props.getRandomFact}
                        icon={{name: 'cached'}}
                        title='Random Fact'
                        buttonStyle={Styles.button}
                        accessibilityLabel="Will get you a new fact"
                    />
                </View>
            );
        }
        return (
            <View style={Styles.bodyContainer}>
                <Text>
                    Oooops
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        factR: state.fact
    };
}

export default connect(mapStateToProps, {getRandomFact})(IrkfdbBody);
