/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class storyBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.titleStory}>Tittle Story</Text>
          <TextInput
            style={styles.writeTitleStory}
            placeholder="write your title story..."
          />
          <Text style={[styles.titleStory, styles.padding]}>Your Story</Text>
          <TextInput
            style={styles.writeStory}
            placeholder="write your story...."
            multiline={true}
          />
        </View>
        <View style={styles.footer}>
          <Button
            title="Share Story"
            color="#12005e"
            // onPress={} //this for trigger save story
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 1,
    backgroundColor: '#7c43bd',
  },
  titleStory: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  writeTitleStory: {
    backgroundColor: 'white',
    fontSize: 16,
  },
  padding: {
    paddingTop: 24,
  },
  writeStory: {
    flex: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
  },
});
