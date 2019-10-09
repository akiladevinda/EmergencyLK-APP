/**
 * EmergencyLK 
 * Missing Persons News Feed
 */

import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    BackHandler,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import HeaderPrimary from '../../components/Header/HeaderPrimary';
import CustomButtonPrimary from '../../components/CustomButton/CustomButtonPrimary';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';
import CustomButtonBorder from '../../components/CustomButton/CustomButtonBorder';
import API from '../../config/API';
import Spinner from 'react-native-loading-spinner-overlay';

export default class MissingPersonsNewsFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            missingp_data:[],
            data: [
                {id:1,  description:"Colombo", date:"2019-03-25 09:12:00", color:"#228B22", completed:1},
                {id:2,  description:"Matara",     date:"2019-03-25 10:23:00", color:"#FF00FF", completed:0},
                {id:3,  description:"Galle", date:"2019-03-25 11:45:00", color:"#4B0082", completed:1},
                {id:4,  description:"Colombo", date:"2019-03-25 09:27:00", color:"#20B2AA", completed:0},
                {id:5,  description:"Galle", date:"2019-03-25 08:13:00", color:"#000080", completed:0},
                {id:6,  description:"Matara", date:"2019-03-25 10:22:00", color:"#FF4500", completed:1},
                {id:7,  description:"Malabe", date:"2019-03-25 13:33:00", color:"#FF0000", completed:0},
                {id:8,  description:"Nugegoda", date:"2019-03-25 11:56:00", color:"#EE82EE", completed:0},
                {id:9,  description:"Chilaw", date:"2019-03-25 15:00:00", color:"#6A5ACD", completed:0},
                {id:10, description:"Homagama", date:"2019-03-25 12:27:00", color:"#DDA0DD", completed:0},
              ]
        }
    }

    clickEventListener = (item) => {
        Alert.alert("Item selected: "+item.description)
    }

    componentWillMount(){
        this.API_Get_MissingPersons();
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

    //Get All Missing Persons Details API function
    API_Get_MissingPersons = () => {
        this.setState({loading:true})

        fetch(API.API_GET_MISSING_PERSONS,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((responseText) => {
                this.setState({loading:false})
                if(responseText.data[0].status_code == '200'){
                    this.setState({missingp_data:responseText.data})
                }else{

                }
            })
            .catch((error) => {
                this.setState({loading:false})
                Alert.alert(
                    'Error Occured !',
                    'Please try again later...',
                    [
                    {text: 'OK',},
                    ],
                    {cancelable: false},
                );
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <HeaderPrimary 
            title='All Missing Persons'
            onPress={ () => this.backButtonOnPress()}
            />

            <ScrollView>
            <FlatList 
                style={styles.tasks}
                columnWrapperStyle={styles.listContainer}
                data={this.state.missingp_data}
                keyExtractor= {(item) => {
                    return item.id;
                }}
                renderItem={({item}) => {
                return (
                    <TouchableOpacity style={[styles.card, {borderColor:AppStyles.primaryColor}]} onPress={() => {this.clickEventListener(item)}}>
                    <View style={styles.cardContent}>
                        <Text style={[styles.description]}>Missing person in {item.Last_Seen_Location}</Text>
                        <Text style={styles.date}>Reported By : {item.Reporter_Name}</Text>
                    </View>
                    </TouchableOpacity>
                )}}/>
            </ScrollView>

            <Spinner
            visible={this.state.loading}
            cancelable={false}
            />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tasks:{
        flex:1,
      },
      cardContent: {
        marginLeft:20,
        marginTop:10,
      },
    
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    
        marginVertical: 20,
        marginHorizontal:15,
        backgroundColor:"white",
        flexBasis: '46%',
        padding: 10,
        flexDirection:'row',
        flexWrap: 'wrap',
        borderLeftWidth:6,
        height:Metrics.DEVICE_HEIGHT/7,
      },
    
      description:{
        fontSize:18,
        flex:1,
        color:AppStyles.colorBlack,
        fontFamily:AppStyles.primaryFontBold
      },
      date:{
        fontSize:14,
        flex:1,
        color:"#696969",
        marginTop:5
      },
});