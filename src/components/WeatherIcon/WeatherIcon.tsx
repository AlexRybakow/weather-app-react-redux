import React from 'react';
import icon01 from '../../assets/icons/01.svg';
import icon02 from '../../assets/icons/02.svg';
import icon03 from '../../assets/icons/03.svg';
import icon04 from '../../assets/icons/04.svg';
import icon05 from '../../assets/icons/05.svg';
import icon06 from '../../assets/icons/06.svg';
import icon07 from '../../assets/icons/07.svg';
import icon08 from '../../assets/icons/08.svg';
import icon09 from '../../assets/icons/09.svg';

interface IconProps {
  iconNumber: string;
}

const WeatherIcon = ({ iconNumber }: IconProps) => {
  const createImg = (icon: string) => <img src={icon} alt="icon" />;
  switch (iconNumber) {
    case '01':
      return createImg(icon01);
    case '02':
      return createImg(icon02);
    case '03':
      return createImg(icon03);
    case '04':
      return createImg(icon04);
    case '05':
      return createImg(icon05);
    case '06':
      return createImg(icon06);
    case '07':
      return createImg(icon07);
    case '08':
      return createImg(icon08);
    case '09':
      return createImg(icon09);
    default:
      return null;
  }
};

export default WeatherIcon;
