import React from 'react';
import { useDateFormat } from '../../Hooks/useDateFormat';
import { IconTime } from '../../Assets/Icons';

const InfoTime = ({ time }) => {
  return (
    <>
      <IconTime /> {useDateFormat(time)} ago
    </>
  );
};

export default InfoTime;
