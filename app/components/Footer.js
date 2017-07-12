import React, { Component } from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class FooterMenu extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            onPress={() => {
              Actions.home();
            }}
          >
            <Icon name="home" size={30} />
            <Text>Home</Text>
          </Button>
          <Button
            onPress={() => {
              Actions.draft();
            }}
          >
            <Icon name="archive" size={30} />
            <Text>Draft</Text>
          </Button>
          <Button
            onPress={() => {
              Actions.favorite();
            }}
          >
            <Icon name="star" size={30} />
            <Text>Star</Text>
          </Button>
          <Button
            onPress={() => {
              Actions.createStory();
            }}
          >
            <Icon name="add" size={30} />
            <Text>Write</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
