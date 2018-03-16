/**
 * Created by swapnils on 09/03/18.
 */
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Card
} from 'react-native-elements';
import Styles from './../styles/Styles';

const IrkfdbCardSources = ({sources}) => {
    let sourceList = sources.map((source) =>
        <Text key={source} style={Styles.cardSourcesText}>{source}</Text>
    );
    return (
        <View style={Styles.cardSources}>
            <Text style={Styles.cardSourcesHeader}>
                Sources:
            </Text>
            {sourceList}
        </View>
    );
}
const IrkfdbCardCategories = ({categories}) => {
    if (categories.length === 0) {
        return (
            <View>

            </View>
        )
    }
    let categoryList = categories.map((category) =>
        <Text key={category} style={Styles.cardSourcesText}>{category}</Text>
    );
    return (
        <View style={Styles.cardSources}>
            <Text style={Styles.cardSourcesHeader}>
                Categories:
            </Text>
            {categoryList}
        </View>
    );
}
const IrkfdbCard = ({fact}) => {
    console.log("fact", fact);
    const sources = fact.sources;
    const categories = fact.categories;
    console.log("sources", sources);
    console.log("categories", categories);
    return (
        <Card
            title='Rajinikanth Fact'
            containerStyle={Styles.cardContainer}
            titleStyle={Styles.cardHeader}
        >
            <Text style={Styles.cardText}>
                {fact.fact}
            </Text>
            <IrkfdbCardSources sources={sources}/>
            <IrkfdbCardCategories categories={categories}/>
        </Card>
    );
};

export default IrkfdbCard;
