import React from 'react';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { buttonStartStopStyles } from './buttonStartStopStyles';
import { FontAwesome5 } from '@expo/vector-icons'

type buttonProps = TouchableOpacityProps & {
  buttonIcon: string
}

const ButtonStartStop: React.FC<buttonProps> = ({ buttonIcon, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={ 0.7 }
      { ...rest }
    >
      <View>
        <FontAwesome5
          name={ buttonIcon }
          style={ buttonStartStopStyles.icon }
        />
      </View>
    </TouchableOpacity>
  )
}

export default ButtonStartStop;
