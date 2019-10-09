/**
 * EmergencyLK 
 * Flood Alerts Screen
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    BackHandler
} from 'react-native';
import HeaderPrimary from '../../components/Header/HeaderPrimary';

export default class FloodAlerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.backButtonOnPress);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.backButtonOnPress);
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
            title='Flood Alerts'
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