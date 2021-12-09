import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinnar = ({ sizeprop }) => (

    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={sizeprop || 'large'} />
    </View>
  );


const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinnar };
