import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const icon = (favorite) => {
  if (favorite) {
    return <Icon name="heart" size={15} color="#e91e63" />
  }
  return <Icon name="heart-o" size={15} color="#9e9e9e" />
}

const Favorite = ({ favorite, rowId }) => (
  <View style={style.container}>
    <Text style={([style.time, style.textPadding])}>
      {favorite.title} | {favorite.time} | {icon(favorite.favorite)}
    </Text>
    <Text style={([style.story, style.textPadding])}>
      {favorite.drafts[0].story}
    </Text>
  </View>
);

export default Favorite;
