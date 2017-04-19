import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  Dimensions
} from 'react-native';

import Button from 'react-native-button'

import Spotify from '../Classes/Spotify';

export default class Main extends Component {
  static get defaultProps() {
    return {
      title: 'Main',
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      text: 'Haku',
      api: 'https://api.spotify.com/v1/search',
      done: false
    }
  }

  componentDidUpdate(){

	//Results-näkymä avataan kun lataus on suoritettu loppuun
    if(this.state.done === true){
      this.setState({done: false});
      this.props.navigator.push({
      title: 'Results' });
    }
  }

  render() {
    return (
	
      <View style = {styles.container}>
		
		//Käyttöliittymä
        <TextInput   style={styles.textInput}
         value= {this.state.text}
         onChangeText={(text) => this.setState({text: text})}/>

         <Button containerStyle = {styles.buttonStyle} style = {styles.button} onPress = {() => {this.search('artist')}}>
           <Text>Hae artistia</Text>

         </Button>

         <Button containerStyle = {styles.buttonStyle} style = {styles.button} onPress = {() => {this.search('track')}}>
           <Text>Hae kappaletta</Text>

         </Button>

         <Button containerStyle = {styles.buttonStyle} style = {styles.button} onPress = {() => {this.search('album')}}>
           <Text>Hae albumia</Text>

         </Button>

         <Button containerStyle = {styles.buttonStyle} style = {styles.button} onPress = {() => {this.search('playlist')}}>
           <Text>Hae soittolistaa</Text>

         </Button>

      </View>

    )
  }

  async search(type){
  
	//Haku Rest-rajapinnalta

    var apiUrl = this.state.api + '?q=' + encodeURI(this.state.text) + '&type=' + type;


      var json= await fetch(apiUrl, {
                                            method: 'get',
                                            headers: {
                                                 'Accept': 'application/json',
                                                  'Content-Type': 'application/json'
                                            }
                                        } )
        .then((response) => {

          return response.json()

        })
        .then((responseJson) => {

          return responseJson;
        })
        .catch((error) => {
          console.log('Virhe: ' + error)
        });
		
		//Json-responsen lisääminen luokkaan
        await Spotify.setContent(json);

        this.setState({done: true})




    }


}

//itemWidth on nappien ja tekstikentän leveys
const itemWidth = Dimensions.get('window').width * 2/3;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    textInput:{

         height: 40,
         width: itemWidth,
         borderColor: 'gray',
         borderWidth: 2
     },
     button: {
       height: 50,
       width: 200,
       margin: 10,
       borderColor: 'black'
     },
     buttonStyle:{
       padding:10,
       height:45,
       width: itemWidth,
       margin: 4,
       overflow:'hidden',
       borderRadius:4,
       alignItems: 'center',
       backgroundColor: 'lightgray'
     },
  })
