import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      colors={['#004777', '#F7B801', '#A30000', '#FE6F6B']}
      colorsTime={[7, 5, 2, 0]}
      onComplete={() => {
        stopAimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
