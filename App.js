import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.row_parent}/>
      <View style={styles.row_parent}>
          <Button title="AC" style={styles.row} />
          <Button title="+/-" style={styles.row} />
          <Button title="%" style={styles.row} />
          <Button title="/" style={styles.row} />

      </View>
      <View style={styles.row_parent}>
        <Button title="7"/>
        <Button title="8"/>
        <Button title="9"/>
        <Button title="*"/>
      </View>
      <View style={styles.row_parent}>
        <Button title="4"/>
        <Button title="5"/>
        <Button title="6"/>
        <Button title="-"/>
      </View>
      <View style={styles.row_parent}>
        <Button title="1"/>
        <Button title="2"/>
        <Button title="3"/>
        <Button title="+"/>
      </View>
      <View style={styles.row_parent}>
        <Button title="0"/>
        <Button title="."/>
        <Button title="="/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
    },
    row_parent: {
        flex: 1,
        backgroundColor: "gold",
        flexDirection: "row",
        // alignItems: "center"
        justifyContent: "center",
        borderColor: "red",
        alignItems: "center",
        width: "100%"
    },
    row: {
        flexGrow: 1,
        alignSelf: "center"
    }
});


