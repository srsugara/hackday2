import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon,Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class FooterMenu extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button onPress={() => { Actions.home(); }}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button onPress={() => { Actions.draft(); }}>
              <Icon name="archive" />
               <Text>Draft</Text>
            </Button>
            <Button onPress={() => { Actions.favorite(); }}>
              <Icon name="star" />
               <Text>Star</Text>
            </Button>
            <Button onPress={() => { Actions.writeDraft(); }}>
              <Icon name="add" />
               <Text>Write</Text>
            </Button>
            <Button onPress={() => { Actions.createStory(); }}>
              <Icon name="book" />
              <Text>Create</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}