import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { homeStyles } from './homeStyles';
import IconButton from '../../components/IconButton/IconButton';
import TimeDisplay from '../../components/TimeDisplay/TimeDisplay';

const Home: React.FC = () => {
  const [startStopIcon, setStartStopIcon] = useState('play')
  const [planeIcon, setPlaneIcon] = useState('plane')

  function toggleTimer() {
    startStopIcon === 'play' ? setStartStopIcon('stop') : setStartStopIcon('play')
  }

  function tooglePlane() {
    planeIcon === 'plane' ? setPlaneIcon('plane-slash') : setPlaneIcon('plane')
  }

  return (
    <View style={homeStyles.home}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <TimeDisplay
        buttonStatus={startStopIcon}
      />

      <View style={homeStyles.buttonsView}>
        <IconButton
          buttonIcon={startStopIcon}
          onPress={toggleTimer}
        />
        <IconButton
          buttonIcon={planeIcon}
          onPress={tooglePlane}
        />
      </View>
    </View>
  );
}

export default Home;
