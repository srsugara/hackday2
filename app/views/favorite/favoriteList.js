import React, { PropTypes } from 'react';
import { ListView } from 'react-native';
import Favorite from './favorite';

const FavoriteList = ({list}) => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const favoritelist = ds.cloneWithRows(list);
  if (list.length > 0) {
    return (
      <ListView
        enableEmptySections
        dataSource={favoritelist}
        renderRow={(favorite, sectionId, rowId) => <Favorite favorite={favorite} rowId={rowId} />}
      />
    );
  }
  return null;
};

export default FavoriteList;
