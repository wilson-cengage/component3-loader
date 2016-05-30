import ReactDOM from 'react-dom';
import React from 'react';

import Loader from 'components/Loader';

import 'index.html';
import 'systemjs.config';

ReactDOM.render(
  <Loader package="component3-package1" component="DropDown"/>,
  document.getElementById('root')
);
