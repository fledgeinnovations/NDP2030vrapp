import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class NDP2030 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('lab.jpg')}/>
        <Text
          style={{
            backgroundColor: '#16a085',
            fontSize: 0.4,
            fontWeight: '300',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          NDP2030
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('NDP2030', () => NDP2030);
