import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { homeStyles } from './homeStyles';
import ButtonStartStop from '../../components/ButtonStartStop/ButtonStartStop';

const Home: React.FC = () => {
  const [time, setTime] = useState('00:00')

  const updateTime = () => {
    setTime(time + 1)
  }

  return (
    <View style={ homeStyles.home }>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Text style={ homeStyles.time }>
        { time }
      </Text>

      <ButtonStartStop />
    </View>
  );
}

export default Home;
