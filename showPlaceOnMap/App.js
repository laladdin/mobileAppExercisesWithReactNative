import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';
import MapView, { Marker} from'react-native-maps';

export default function App() {

  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(60.200692);
  const [longitude, setLongitude] = useState(24.934302);

  const showPlace = () => {
    setAddress(address.trim())
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=V0Vjm6hETnOGsE0dUeIfLZIRxzMcATah&location=' + address;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setLatitude(responseJson.results[0].locations[0].latLng.lat);
      setLongitude(responseJson.results[0].locations[0].latLng.lng);
    })
    .catch((error) => {
      Alert.alert('Error:', error.message);
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta:0.0322,
            longitudeDelta:0.0221,
          }}
           >
           <Marker
            coordinate={{
              latitude: latitude, 
              longitude: longitude}}
              title={address}/>
        </MapView>
      </View>
      <View>
        <TextInput style={styles.textinputs} value={address}
          onChangeText={(address) => setAddress(address)}
        />
        <Button title="Show" onPress={showPlace}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputs: {
    fontSize: 18,
    width: 200,
    height: 40,
    marginBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  mapContainer: {
    width: '100%',
    height: 400,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});
