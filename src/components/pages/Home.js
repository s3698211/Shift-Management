import React from 'react';
import { Calendar } from 'antd';

function onSelect(value) {
  console.log(value.format('YYYY-MM-DD'));
}

const Home = () => {
  return (
    <div>
      <Calendar onSelect={onSelect} />
    </div>
  );
};

export default Home;
