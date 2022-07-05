import React from 'react';
import ReactDOM from 'react-dom';
import './style/tailwind-pre-build.css';

const element = <div className="text-sm text-red-700">, world!</div>;

ReactDOM.render(
  element,
  document.getElementById('root'),
);
