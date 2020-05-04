import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';
import MapView, { Marker} from'react-native-maps';

export default function App() {

  const [region, setRegion] = useState({latitude:60.200692,
    longitude:24.934302,
    latitudeDelta:0.0322,
    longitudeDelta:0.0221});
  const [address, setAddress] = useState('');
  const showPlace = () => {
    const address2 = address.trim()
    setAddress(address2)
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=V0Vjm6hETnOGsE0dUeIfLZIRxzMcATah&location=' + address;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setRegion({...region, latitude: responseJson.results[0].locations[0].latLng.lat, longitude:responseJson.results[0].locations[0].latLng.lng})
    })
    .catch((error) => {
      Alert.alert('Error:', error.message);
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
          region={region}
           >
           <Marker
            coordinate={{
              latitude: region.latitude, 
              longitude: region.longitude}}
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
