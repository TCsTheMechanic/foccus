import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { homeStyles } from './homeStyles';
import ButtonStartStop from '../../components/ButtonStartStop/ButtonStartStop';
import TimeDisplay from '../../components/TimeDisplay/TimeDisplay';

const Home: React.FC = () => {
  const [buttonIcon, setButtonIcon] = useState('play')

  function toggleTimer() {
    buttonIcon === 'play' ? setButtonIcon('stop') : setButtonIcon('play')
  }

  return (
    <View style={ homeStyles.home }>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <TimeDisplay
        buttonStatus={ buttonIcon }
      />

      <ButtonStartStop
        buttonIcon={ buttonIcon }
        onPress={ toggleTimer }
      />
    </View>
  );
}

export default Home;
