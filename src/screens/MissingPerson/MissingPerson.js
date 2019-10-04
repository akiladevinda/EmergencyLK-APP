/**
 * EmergencyLK 
 * Report Missing Person Screen
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import HeaderPrimary from '../../components/Header/HeaderPrimary';
import Assets from '../../config/Assets';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CustomButtonPrimary from '../../components/CustomButton/CustomButtonPrimary';

export default class MissingPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gender_data:[  
                {label: 'Male', value: 0 },
                {label: 'Female', value: 1 }]
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
            title='Report Missing Person'
            onPress={ () => this.backButtonOnPress()}
            />
            <ScrollView>
            <Image source={Assets.HOME_MISSING_PERSONS} style={styles.missingPersonImage}/>

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
            <Image style={styles.inputIcon} source={Assets.IC_EMAIL}/>
            <TextInput style={styles.inputs}
                placeholder="Your Email"
                keyboardType="email-address"
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


            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_LOCATION}/>
            <TextInput style={styles.inputs}
                placeholder="Your Address"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_mobileno) => this.setState({reporter_mobileno})}/>
            </View> 

            <View style={styles.borderSeparate}></View>

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_NAME}/>
            <TextInput style={styles.inputs}
                placeholder="Missing Person's Name"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_LOCATION}/>
            <TextInput style={styles.inputs}
                placeholder="Missing Person's District"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_NAME}/>
            <TextInput style={styles.inputs}
                placeholder="Missing Person's Height"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_NAME}/>
            <TextInput style={styles.inputs}
                placeholder="Missing Person's Age"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.CRIME_REPORTER_NAME}/>
            <TextInput style={styles.inputs}
                placeholder="Last Seen Location"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(reporter_name) => this.setState({reporter_name})}/>
            </View> 

            <View style={styles.genderView}>
            <Text style={{fontFamily:AppStyles.primaryFont,fontSize:20,marginBottom:10,marginTop:10}}>Gender</Text>
            <RadioForm
                radio_props={this.state.gender_data}
                initial={-1}
                formHorizontal={true}
                labelHorizontal={false}
                buttonColor={AppStyles.primaryColor}
                selectedButtonColor={AppStyles.primaryColor}
                buttonSize={30}
                buttonOuterSize={40}
                animation={false}
                labelStyle={{fontFamily:AppStyles.primaryFontLight,fontSize:18}}
                buttonWrapStyle={{marginLeft: 20}}
                onPress={(value) => {this.setState({selected_gender:value})}}
            />
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
            <CustomButtonPrimary title='REPORT MISSING PERSON' onPress={ ()=> alert('Clicked')}/>

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
    missingPersonImage:{
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
    },
    genderView:{
        marginLeft:Metrics.DEVICE_WIDTH/9,
        marginTop:10,
    }
});