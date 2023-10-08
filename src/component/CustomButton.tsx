import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import { PrimaryTheme } from '../styles/Themes';

export interface Props {
  title: string;
  disabled?: boolean;
  buttonStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  onPress: any;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonStyles, props.buttonStyle]}
      disabled={props.disabled}>
      <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};
CustomButton.defaultProps = {
  disbled: false,
};
const styles = StyleSheet.create({
    buttonStyles: {
      backgroundColor: PrimaryTheme.$DARK_PRIMARY_COLOR,
      borderRadius: 5,
      width: 120,
      height: 40,
  
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      padding:10
    },
  });
export default CustomButton;
