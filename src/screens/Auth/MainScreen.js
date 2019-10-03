/** 
 * EmergencyLK 
 * Main Screen Component - User Authentication
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Metrics from '../../config/Metrics';
import Statusbar from '../../components/Statusbar/Statusbar';
import AppStyles from '../../config/AppStyles';
import Assets from '../../config/Assets';

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <Statusbar backgroundColor={AppStyles.primaryColor}/>

            <LinearGradient 
                start={{x: 0, y: 0.5}} end={{x: 1, y: 0.1}} 
                colors={['#1E1E1E', '#823636', '#E44D4D']}  
                style={styles.topHeader}>

            <Image source={Assets.APP_LOGO} style={styles.appLogo}/>
            </LinearGradient>
     
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topHeader:{
        width:Metrics.DEVICE_WIDTH,
        height:Metrics.DEVICE_HEIGHT/1.8,
        backgroundColor:AppStyles.primaryColor,
        borderBottomRightRadius:150
    },
    appLogo:{
        width:Metrics.DEVICE_WIDTH,
        height:Metrics.DEVICE_HEIGHT/2.5,
        marginTop:Metrics.DEVICE_HEIGHT/10,
        resizeMode:'contain'
    }
});