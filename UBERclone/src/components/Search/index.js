import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Para Onde?"
        placeholderTextColor="#333"
        onPress={() => { }}
        query={{
          key: 'AIzaSyD4DXEXt1WFlKmqWIcTJC1b90_Uv0Ww3Ts',
          language: 'pt'
        }}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrete: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            top: 60,
            width: '100%'
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            height: 54,
            margin: 0,
            borderRadius: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.01,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            borderWidth: 0,
            borderColor: '#ddd',
            fontSize: 18
          },
          listView: {
            borderWidth: 1,
            borderColor: '#ddd',
            backgroundColor: '#fff',
            marginHorizontal: 20,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.01,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 10
          },
          description: {
            fontSize: 16
          },
          row: {
            padding: 20,
            height: 58
          }
        }}
      />
    );
  }
}
