/**
 * EmergencyLK 
 * Report Crime Screen
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';
import HeaderPrimary from '../../components/Header/HeaderPrimary';

export default class ReportCrime extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //Back Button Press Event
    backButtonOnPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
            <HeaderPrimary 
            title='Report Crime'
            onPress={ () => this.backButtonOnPress()}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});