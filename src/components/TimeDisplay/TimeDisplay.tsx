import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { timeDisplayStyles } from './timeDisplayStyles';

interface TimeDisplayProps {
  buttonStatus: string
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({ buttonStatus }) => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    buttonStatus === 'stop' && setTimeout(() => setSeconds(seconds + 1), 1000)

    if (seconds === 60) {
      setSeconds(0)
      setMinutes(minutes + 1)
    }

    if (minutes === 60) {
      setMinutes(0)
      setHours(hours + 1)
    }
  })

  function clearDisplay() {
    setSeconds(0)
    setMinutes(0)
    setHours(0)
  }

  function numberPattern(number: number) {
    return String(number).length != 2 ? '0' + number : number
  }

  return (
    <Text style={timeDisplayStyles.time}>
      {numberPattern(hours)}:{numberPattern(minutes)}:{numberPattern(seconds)}
    </Text>
  );
}

export default TimeDisplay;
