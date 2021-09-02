import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ROUTES, SIZES} from '../constants';

const Getstarted = props => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.mainView}>
      <TouchableOpacity onPress={()=> props.navigation.navigate(ROUTES.SIGN_UP)}>
        <Text>gotodashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Getstarted;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
