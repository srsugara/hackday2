/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Footer from '../../components/Footer';

export default class storyBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Story Draft</Text>
          <Text style={styles.titleStory}>Your Tittle :</Text>
          <TextInput
            style={styles.writeTitleStory}
            placeholder="write your title story..."
          />
          <Text style={styles.titleStory}>Your Story :</Text>
          <TextInput
            style={styles.writeStory}
            placeholder="write your story...."
            multiline={true}
          />
        </View>
        <View style={styles.footer}>
          <Button
            title="Share Story"
            color="#003c8f"
            // onPress={} //this for trigger save story
          />
        </View>
        <Footer />
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
    backgroundColor: '#005cb2',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#003c8f',
  },
  titleStory: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    padding: 8,
  },
  writeTitleStory: {
    backgroundColor: 'white',
    fontSize: 16,
  },
  writeStory: {
    flex: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
  },
});
