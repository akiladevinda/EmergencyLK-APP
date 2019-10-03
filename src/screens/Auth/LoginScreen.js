/** 
 * EmergencyLK 
 * Login Screen of the Application
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Text>Login</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});