import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
  },
  story: {
    fontSize: 12,
    paddingTop: 2,
    paddingBottom: 2,
    textAlign: 'left',
  },
  time: {
    fontSize: 16,
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
  leftContainer: {
    flex: 5,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 24,
  },
  Button: {},
});

const Draft = ({ draft, rowId }) => (
  <View style={style.container}>
    <View style={style.leftContainer}>
      <Text style={[style.time, style.textPadding]}>
        {draft.time} | {draft.title}
      </Text>
      <Text style={[style.story, style.textPadding]}>
        {draft.story}
      </Text>
    </View>
    <View style={style.rightContainer}>
      <TouchableHighlight
        underlayColor={'#4e4273'}
        onPress={null}
        style={style.Button}
      >
        <Icon
          name="arrow-circle-up"
          color={'#4e4273'}
          size={30}
          backgroundColor="#ffffff"
        />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={'#4e4273'}
        onPress={null}
        style={style.Button}
      >
        <Icon
          name="arrow-circle-down"
          color={'#4e4273'}
          size={30}
          backgroundColor="#ffffff"
        />
      </TouchableHighlight>
    </View>
  </View>
);

Draft.propTypes = {
  draft: PropTypes.shape({
    time: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Draft;
