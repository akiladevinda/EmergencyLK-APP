/** 
 * EmergencyLK 
 * Home Screen of the Application  -> Main Screen Component
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Metrics from '../../config/Metrics';
import Assets from '../../config/Assets';
import AppStyles from '../../config/AppStyles';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <ScrollView>
            <LinearGradient 
                start={{x: 0, y: 0.5}} end={{x: 1, y: 0.1}} 
                colors={['#1E1E1E', '#823636', '#E44D4D']}  
                style={styles.homeBgView}>

            <View style={styles.headerView}>
            <Image source={Assets.HEADER_LOGO} style={styles.appLogo}/>
            <Image source={Assets.IC_NOTIFICATION} style={styles.notificationsIc}/>
            </View>

            <View style={styles.missingPersons}>
            <Text style={styles.misssingPersonsText}>100 Missing Persons</Text>
            <View style={styles.missingPersongBtnContainer}>
            <TouchableOpacity style={styles.missingPersonButton}>
            <Text style={styles.missingPersonBtnText}>VIEW ALL</Text>
            </TouchableOpacity>
            </View>
            </View>

            </LinearGradient>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homeBgView:{
        width:Metrics.DEVICE_WIDTH,
        height:Metrics.DEVICE_HEIGHT
    },
    headerView:{
        flexDirection:'row',
        width:Metrics.DEVICE_WIDTH,
        height:Platform.OS === 'android' ? Metrics.DEVICE_HEIGHT/8 : Metrics.DEVICE_HEIGHT/5,
    },
    appLogo:{
        width:Metrics.DEVICE_WIDTH/2.5,
        height:Metrics.DEVICE_HEIGHT/8,
        resizeMode:'contain',
        marginLeft:10,
    },
    notificationsIc:{
        width:30,
        height:30,
        resizeMode:'contain',
        position: 'relative',
        marginLeft:Metrics.DEVICE_WIDTH/2.1,
        marginTop:Metrics.DEVICE_HEIGHT/16
    },
    missingPersons:{
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0.3)',
        width:Metrics.DEVICE_WIDTH/1.1,
        height:Metrics.DEVICE_HEIGHT/7,
        marginLeft:Metrics.DEVICE_WIDTH/25,
        marginTop:10,
        borderRadius:10,
    },
    misssingPersonsText:{
        textAlign:'center',
        fontFamily:AppStyles.primaryFontLight,
        fontSize:22,
        color:AppStyles.colorWhite,
        width:Metrics.DEVICE_WIDTH/3.5,
        marginTop:5,
    },
    missingPersongBtnContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        width:Metrics.DEVICE_WIDTH/3,
        height:Metrics.DEVICE_HEIGHT/13,
        borderRadius:30,
        marginLeft:Metrics.DEVICE_WIDTH/4,
        backgroundColor:AppStyles.colorWhite,
        marginTop:Metrics.DEVICE_HEIGHT/25
    },
    missingPersonButton:{
        height:50,
        width:Metrics.DEVICE_WIDTH/1.2,
        padding:20,
        marginTop:5,
        backgroundColor:'transparent'
    },
    missingPersonBtnText:{
        textAlign:'center',
        fontSize:18,
        fontFamily:AppStyles.primaryFontBold,
        marginTop:-10,
        color:AppStyles.primaryColor
    }
});