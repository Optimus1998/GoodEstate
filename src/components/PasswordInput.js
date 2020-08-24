import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {signInputStyles} from '../styles/signInputStyles';

export const PasswordInput = ({
  onchangeTextHandler,
  val,
  onBlurHandler,
  sercureTextState,
  secureTextEntryHandler,
  placeholderText
}) => {
  return (
    <View style={styles.inputField}>
      <View style={styles.iconSign}>
        <MaterialIcons name="lock" size={30} color="gray" />
      </View>
      <TextInput
        style={styles.txtInput}
        placeholder={placeholderText}
        secureTextEntry={sercureTextState ? true : false}
        onChangeText={onchangeTextHandler}
        value={val}
        onBlur={onBlurHandler}
      />
      <TouchableOpacity onPress={secureTextEntryHandler}>
        <Ionicons
          style={styles.iconInfo}
          name={sercureTextState ? 'eye-off' : 'eye'}
          size={30}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  ...signInputStyles,
  iconInfo: {},
});
