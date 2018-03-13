/**
 * Created by swapnils on 09/03/18.
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Styles from './../styles/Styles';

const IrkfdbCardSources = ({sources}) => {
    let sourceList = sources.map((source) =>
        <Text key={source} style={Styles.cardSourcesText}>{source}</Text>
    );
    console.log("sourceList", sourceList);
    return (
        <View style={Styles.cardSources}>
            <Text style={Styles.cardSourcesHeader}>
                Sources:
            </Text>
            {sourceList}
        </View>
    );
}
const IrkfdbCard = ({fact}) => {
    console.log("fact", fact);
    const sources = fact.sources;
    return (
        <View>
            <Text style={Styles.cardText}>
                {fact.fact}
            </Text>
            <IrkfdbCardSources sources={sources}/>
        </View>
    );
};

export default IrkfdbCard;
