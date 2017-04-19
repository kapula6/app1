import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';

import Button from 'react-native-button'

import Spotify from '../Classes/Spotify';

export default class Results extends Component {
  static get defaultProps() {
    return {
      title: 'Results',
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      renderTracks: false,
      renderAlbums: false,
      renderArtists: false,
      renderPlaylists: false
    }
  }

  componentWillMount(){


	//Spotify-luokan sisällön lisääminen elementteihin. Jos ei haettu kappaleita, käytetään erilaisia elementtejä.
    if(Spotify.api.artists){
      console.log('artist: ' + Object.keys(Spotify.api.artists.items).length)
      this.setState({renderArtists: true})
      for(var i = 0; i < Object.keys(Spotify.api.artists.items).length ; i++){
        this.state.items.push(<Text key={i}>{Spotify.api.artists.items[i].name}</Text>);
      }
    }
    else if(Spotify.api.tracks){
      console.log('track: ' + Object.keys(Spotify.api.tracks.items).length)
      this.setState({renderTracks: true})

    }
    else if(Spotify.api.playlists){
      console.log('playlist: ' + Object.keys(Spotify.api.playlists.items).length)
      for(var i = 0; i < Object.keys(Spotify.api.playlists.items).length ; i++){
        this.state.items.push(<Text key={i}>{Spotify.api.playlists.items[i].name}</Text>);
      }

    }
    else if(Spotify.api.albums){
      console.log('album: ' + Object.keys(Spotify.api.albums.items).length)
      for(var i = 0; i < Object.keys(Spotify.api.albums.items).length ; i++){
        this.state.items.push(<Text key={i}>{Spotify.api.albums.items[i].name}</Text>);
      }

    }

  }

  render() {
  
	//Käyttöliittymän renderöinti
    return (
	
      <View style = {styles.container}>

        <Text>Haun tulokset:{'\n'}</Text>

        <ScrollView style={styles.scrollView}>

          {this.renderItems()}

        </ScrollView>

        <Button containerStyle = {styles.buttonStyle} style = {styles.button} onPress = {() => {this.props.navigator.push({
        title: 'Main' });
        }}>
          <Text>Takaisin</Text>

        </Button>


      </View>

    )
  }

  renderItems(){
  
	//Jos haetaan kappaleita, renderöidään this.renderRow(), muussa tapauksessa this.state.items.
    if(this.state.renderTracks === true){
      return this.renderRow();
    }
	
    else{
      return this.state.items;
    }
  }

  renderRow(){
  
	//Kappale-elementit
      return(

        <View>
        <TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[0].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.image} source={{uri: Spotify.api.tracks.items[0].album.images[2].url}} />
            <Text>{Spotify.api.tracks.items[0].artists[0].name + ' - ' + Spotify.api.tracks.items[0].name}</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[1].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.image} source={{uri: Spotify.api.tracks.items[1].album.images[2].url}} />
          <Text>{Spotify.api.tracks.items[1].artists[0].name + ' - ' + Spotify.api.tracks.items[1].name}</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[2].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: Spotify.api.tracks.items[2].album.images[2].url}} />
        <Text>{Spotify.api.tracks.items[2].artists[0].name + ' - ' + Spotify.api.tracks.items[2].name}</Text>
      </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[3].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.image} source={{uri: Spotify.api.tracks.items[3].album.images[2].url}} />
      <Text>{Spotify.api.tracks.items[3].artists[0].name + ' - ' + Spotify.api.tracks.items[3].name}</Text>
    </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[4].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[4].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[4].artists[0].name + ' - ' + Spotify.api.tracks.items[4].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[5].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[5].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[5].artists[0].name + ' - ' + Spotify.api.tracks.items[5].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[6].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[6].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[6].artists[0].name + ' - ' + Spotify.api.tracks.items[6].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[7].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[7].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[7].artists[0].name + ' - ' + Spotify.api.tracks.items[7].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[8].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[8].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[8].artists[0].name + ' - ' + Spotify.api.tracks.items[8].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[9].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[9].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[9].artists[0].name + ' - ' + Spotify.api.tracks.items[9].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[10].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[10].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[10].artists[0].name + ' - ' + Spotify.api.tracks.items[10].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[11].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[11].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[11].artists[0].name + ' - ' + Spotify.api.tracks.items[11].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[12].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[12].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[12].artists[0].name + ' - ' + Spotify.api.tracks.items[12].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[13].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[13].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[13].artists[0].name + ' - ' + Spotify.api.tracks.items[13].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[14].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[14].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[14].artists[0].name + ' - ' + Spotify.api.tracks.items[14].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[15].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[15].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[15].artists[0].name + ' - ' + Spotify.api.tracks.items[15].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[16].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[16].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[16].artists[0].name + ' - ' + Spotify.api.tracks.items[16].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[17].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[17].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[17].artists[0].name + ' - ' + Spotify.api.tracks.items[17].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[18].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[18].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[18].artists[0].name + ' - ' + Spotify.api.tracks.items[18].name}</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => {Linking.openURL(Spotify.api.tracks.items[19].external_urls.spotify).catch(err => console.error('An error occurred', err));}}>
  <View style={{flexDirection: 'row'}}>
    <Image style={styles.image} source={{uri: Spotify.api.tracks.items[19].album.images[2].url}} />
    <Text>{Spotify.api.tracks.items[19].artists[0].name + ' - ' + Spotify.api.tracks.items[19].name}</Text>
  </View>
</TouchableOpacity>

</View>
      );
    }



}



//Takaisin-napin leveys
const itemWidth = Dimensions.get('window').width * 2/3;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    scrollView:{
      marginLeft: 5,
      marginRight: 5,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'gray'
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
	image:{
	  height: 64,
	  width: 64
	}

  })
