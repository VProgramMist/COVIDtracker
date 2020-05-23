import React from 'react';
import {G, Rect, Text} from 'react-native-svg';

const Tooltip = ({
  x,
  y,
  tooltipX,
  tooltipY,
  tooltipConfirmed,
  tooltipDeaths,
  tooltipRecovered,
  tooltipHight,
  color,
  index,
  dataLength,
}) => {
  let xAxis = 4;
  if (dataLength > 4) {
    if (index < 2) {
      xAxis = 35;
    } else if (index > dataLength - 2) {
      xAxis = -20;
    } else {
      xAxis = 4;
    }
  }

  return (
    <G x={tooltipX < 5 ? x(1) : x(tooltipX) - 40} y={y(tooltipY)}>
      <G y={tooltipY > tooltipHight / 2 ? 20 : -60} x={xAxis}>
        <Rect
          x={-2}
          y={y}
          height={50}
          width={120}
          stroke={color}
          fill="white"
          ry={10}
          rx={10}
        />
        <Rect
          x={-65}
          y={0}
          height={50}
          width={50}
          fill={color}
          ry={10}
          rx={10}
        />
        <Rect x={-40} y={0} height={50} width={65} fill={color} />
        <Text x={-60} y={14} style={styles.text}>
          Заражено:
        </Text>
        <Text x={-60} y={28} style={styles.text}>
          Умерло:
        </Text>
        <Text x={-60} y={42} style={styles.text}>
          Выздоровело:
        </Text>
        <Text x={30} y={14} style={{fill: 'black'}}>
          {tooltipConfirmed}
        </Text>
        <Text x={30} y={28} style={{fill: 'black'}}>
          {tooltipDeaths}
        </Text>
        <Text x={30} y={42} style={{fill: 'black'}}>
          {tooltipRecovered}
        </Text>
      </G>
    </G>
  );
};

const styles = {
  text: {
    fontFamily: 'Alaskan Council Socalist Republ',
    fontSize: 14,
    fill: 'white',
  },
};

export default Tooltip;
