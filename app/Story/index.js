import React, { Component } from 'react';
import { Image, View, Button } from 'react-native';

const storyBook = () => {
    return (
    <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      <View style={{ flex: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={} />
      </View>
      <View style={{ flex: 2, justifyContent: 'flex-end', paddingBottom: 42, paddingLeft: 30, paddingRight: 30 }}>
        <Button
          block
          style={{ borderRadius: 5, backgroundColor: '#b40101' }}
          onPress={() => Actions.DrawerMenu()}
        >
          Sign In
        </Button>
      </View>
    </View>

    );
};

export default storyBook;