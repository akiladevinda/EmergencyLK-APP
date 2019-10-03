/** 
 * EmergencyLK 
 * Register Screen of the Application
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TextInput
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBackBtn from '../../components/Header/HeaderBackBtn';
import Metrics from '../../config/Metrics';
import Assets from '../../config/Assets';
import AppStyles from '../../config/AppStyles';
import CustomButtonPrimary from '../../components/CustomButton/CustomButtonPrimary';

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            full_name:'',
            nic_number:'',
            email:'',
            password:'',
            address:'',
            selected_gender:'',
            gender_data:[  
            {label: 'Male', value: 0 },
            {label: 'Female', value: 1 }]
        }
    }

    //On Press event for the back button 
    backButtonOnPress = () => {
        this.props.navigation.goBack();
        return true;
    }

    //Login button click method
    buttonOnClickListner = () => {
    
    }

    render() {
        return (
            <View style={styles.container}>
           
           <ScrollView>
            <LinearGradient 
                start={{x: 0, y: 0.5}} end={{x: 1, y: 0.1}} 
                colors={['#1E1E1E', '#823636', '#E44D4D']}  
                style={styles.headerView}>
            <HeaderBackBtn 
                title='Register'
                onPress={ ()=> this.backButtonOnPress()}
            />
            <Image source={Assets.APP_LOGO} style={styles.appLogo}/>
            </LinearGradient>

            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.IC_FULLNAME}/>
            <TextInput style={styles.inputs}
                placeholder="Full Name"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(full_name) => this.setState({full_name})}/>
            </View> 
            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.IC_EMAIL}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.IC_NIC}/>
            <TextInput style={styles.inputs}
                placeholder="NIC Number"
                keyboardType="default"
                underlineColorAndroid='transparent'
                onChangeText={(nic_number) => this.setState({nic_number})}/>
            </View> 
            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.IC_PASSWORD}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                keyboardType="default"
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}/>
            </View>
            <View style={{height:10}}></View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={Assets.IC_ADDRESS}/>
            <TextInput style={styles.inputs}
                placeholder="Address"
                keyboardType="default"
                underlineColorAndroid='transparent'
                secureTextEntry={true}
                multiline={true}
                onChangeText={(address) => this.setState({address})}/>
            </View> 

            <View style={styles.genderView}>
            <Text style={{fontFamily:AppStyles.primaryFont,fontSize:20,marginBottom:10,marginTop:10}}>Gender</Text>
            <RadioForm
                radio_props={this.state.gender_data}
                initial={0}
                formHorizontal={true}
                labelHorizontal={false}
                buttonColor={AppStyles.primaryColor}
                selectedButtonColor={AppStyles.primaryColor}
                buttonSize={30}
                buttonOuterSize={40}
                animation={true}
                labelStyle={{fontFamily:AppStyles.primaryFontLight,fontSize:18}}
                buttonWrapStyle={{marginLeft: 20}}
                onPress={(value) => {this.setState({selected_gender:value})}}
            />
            </View>

            

            <View style={{height:40}}></View>

            <CustomButtonPrimary 
                title='REGISTER'
                onPress = { ()=> this.buttonOnClickListner()}
            />

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
    headerView:{
        width:Metrics.DEVICE_WIDTH,
        height:Metrics.DEVICE_HEIGHT/2.4,
        backgroundColor:'red',
        borderBottomRightRadius:150,
    },
    appLogo:{
        width:Metrics.DEVICE_WIDTH,
        height:Metrics.DEVICE_HEIGHT/3.8,
        resizeMode:'contain',
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
    inputs:{
        height:40,
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
    genderView:{
        marginLeft:Metrics.DEVICE_WIDTH/9,
        marginTop:10,
    }
});