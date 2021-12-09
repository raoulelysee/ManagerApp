import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  // On the following style the array 2nd item let the children style modify the default style.
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
