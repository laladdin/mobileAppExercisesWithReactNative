import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function HistoryScreen(props) {

    const { params } = props.navigation.state;

      return (
        <View style={styles.container}>
          <View style={styles.list}>
            <Text style={styles.text}>History:</Text>
            <FlatList data={params.history} renderItem={({item}) =>
              <Text>{item}</Text>}/>
          </View>
        </View>
      );
}

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          
        },
        text: {
          fontWeight: 'bold',
          fontSize: 25
        },
        list: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
