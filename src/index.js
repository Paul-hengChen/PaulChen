import React from 'react';
import ReactDOM from 'react-dom';

// 建立一個DOM物件
const element = <h1>Hellsssssso, world!</h1>;

// 使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(
  element,
  document.getElementById('root'),
);
