import React, { PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Footer from '../../components/Footer'

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  story: {
    fontSize: 15,
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: 'left',
    flex: 8,
  },
  title: {
    fontSize: 21,
    paddingTop: 2,
    fontWeight: 'bold',
    paddingBottom: 2,
    textAlign: 'center',
  },
  time: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 2,
  },
  textCenter: {
    textAlign: 'center',
  },
  textPadding: {
    paddingLeft: 10,
  },
});

const icon = (favorite) => {
  if (favorite) {
    return <Icon name="heart" size={15} color="#e91e63" />
  }
  return <Icon name="heart-o" size={15} color="#9e9e9e" />
}

const detail = () => (
  <View style={style.container}>
    <Text style={style.title}>
        Eu tempor philosophia instructior
    </Text>
    <Text style={style.story}>
        &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
    <Footer />
  </View>
);

export default detail;
