/**
 * EmergencyLK 
 * Report Crime Screen
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import HeaderPrimary from '../../components/Header/HeaderPrimary';
import Assets from '../../config/Assets';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';
import CustomButtonPrimary from '../../components/CustomButton/CustomButtonPrimary';

export default class ReportCrime extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reporter_name:'',
            reporter_mobileno:'',
            crime_location:'',
            crime_date:'',
            crime_time:'',
            crime_priorityLevel:'',
            crime_mmoredetails:''

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
            <ScrollView>
            <Image source={Assets.HOME_CRIME_REPORT} style={styles.crimeReportImage}/>

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_NAME}/>
            <TextInput style={styles.inputs}
                placeholder="Your Name"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_MOBILE}/>
            <TextInput style={styles.inputs}
                placeholder="Your Mobile Number"
                keyboardType="number-pad"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_mobileno) => this.setState({reporter_mobileno})}/>
            </View> 

            <View style={styles.borderSeparate}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_LOCATION}/>
            <TextInput style={styles.inputs}
                placeholder="Crime Location"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(crime_location) => this.setState({crime_location})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_DATE}/>
            <TextInput style={styles.inputs}
                placeholder="YSelect Date"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(crime_date) => this.setState({crime_date})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_TIME}/>
            <TextInput style={styles.inputs}
                placeholder="Select Time"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(crime_time) => this.setState({crime_time})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainerMore}>
            <TextInput style={styles.inputsMore}
                placeholder="More Information"
                keyboardType="default"
                underlineColorAndroid='transparent'
                multiline={true}
                onChangeText={(crime_mmoredetails) => this.setState({crime_mmoredetails})}/>
            </View> 

            <View style={{height:10}}></View>
            <CustomButtonPrimary title='REPORT CRIME'/>

            <View style={{height:10}}></View>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    crimeReportImage:{
        width:Metrics.DEVICE_WIDTH/3,
        height:Metrics.DEVICE_HEIGHT/4,
        resizeMode:'contain',
        marginLeft:Metrics.DEVICE_WIDTH/3
    },
    inputContainer: {
        borderRadius:20,
        width:Metrics.DEVICE_WIDTH/1.2,
        height:Metrics.DEVICE_HEIGHT/12,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
        marginLeft:Metrics.DEVICE_WIDTH/13,
        backgroundColor:'#E9E9E9'
    },
    inputContainerMore: {
        borderRadius:20,
        width:Metrics.DEVICE_WIDTH/1.2,
        height:Metrics.DEVICE_HEIGHT/5,
        flexDirection: 'row',
        alignItems:'center',
        marginTop:20,
        marginLeft:Metrics.DEVICE_WIDTH/13,
        backgroundColor:'#E9E9E9'
    },
    inputs:{
        height:Metrics.DEVICE_HEIGHT/5,
        marginLeft:16,
        flex:1,
        fontFamily:AppStyles.primaryFont,
    },
    inputsMore:{
        height:200,
        marginLeft:16,
        flex:1,
        fontFamily:AppStyles.primaryFont,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    borderSeparate:{
        width:Metrics.DEVICE_WIDTH/1.2,
        height:2,
        backgroundColor:'black',
        marginTop:Metrics.DEVICE_HEIGHT/15,
        marginLeft:Metrics.DEVICE_WIDTH/12
    }
});