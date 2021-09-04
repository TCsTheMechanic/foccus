import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { iconButtonStyles } from './iconButtonStyles';
import { FontAwesome5 } from '@expo/vector-icons'

type buttonProps = TouchableOpacityProps & {
  buttonIcon: string
}

const IconButton: React.FC<buttonProps> = ({ buttonIcon, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
    >
      <View>
        <FontAwesome5
          name={buttonIcon}
          style={iconButtonStyles.icon}
        />
      </View>
    </TouchableOpacity>
  )
}

export default IconButton;
