import React from 'react';
import { View, Text, Button } from 'react-native';
import DraftList from './draftList';

import style from './styles';

const ViewDraft = () => (
  <View style={style.mainContainer}>
    <View style={style.tranning}>
      <View style={style.menuTranning}>
        <Text
          style={{
            flex: 1,
            color: '#fff',
            fontWeight: 'bold',
            paddingLeft: 10,
          }}
        >
          Draft List
        </Text>
        <Button
          style={{
            fontSize:5,
          }}
          onPress={null}
          title="Collect"
          color="#841584"
          accessibilityLabel="combine draft to story"
        />
      </View>
      <DraftList />
    </View>
  </View>
);

export default ViewDraft;
