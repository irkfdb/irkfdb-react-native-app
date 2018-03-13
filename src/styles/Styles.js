/**
 * Created by swapnils on 09/03/18.
 */
import {
    StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ffccbc'
    },
    headerContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        alignItems: 'center',
        backgroundColor: '#f4511e'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyContainer: {
        backgroundColor: '#ff7043',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15
    },
    bodyText: {},
    cardText: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 15,
        fontSize: 20
    },
    cardSources: {
        alignItems: 'flex-end',
        padding: 5,
        paddingBottom: 15
    },
    cardSourcesHeader: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    cardSourcesText: {
        fontStyle: 'italic'
    },
    button: {
        backgroundColor: "#bf360c",
        color: "black",
        marginTop: 15
    }
});

export default Styles;
