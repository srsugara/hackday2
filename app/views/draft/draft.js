import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
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
});

const Draft = ({ draft, rowId }) => (
  <View style={style.container}>
    <Text style={([style.time, style.textPadding])}>
      {draft.time} | {draft.title}
    </Text>
    <Text style={([style.story, style.textPadding])}>
      {draft.story}
    </Text>
  </View>
);

Draft.propTypes = {
  draft: PropTypes.shape({
    time: PropTypes.string.isRequired,
    story: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
};

export default Draft;
