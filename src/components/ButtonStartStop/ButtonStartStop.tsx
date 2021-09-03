import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { buttonStartStopStyles } from './buttonStartStopStyles';
import { FontAwesome5 } from '@expo/vector-icons'

const ButtonStartStop: React.FC = () => {
  const [buttonIcon, setButtonIcon] = useState('play')

  const toggleButtonIcon = () => {
    buttonIcon === 'play' ? 'stop' : 'play'
  }

  return (
    <TouchableOpacity activeOpacity={ 0.7 }>
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
