import ReactDOM from 'react-dom';
import React from 'react';

import Loader from 'components/Loader';

import 'index.html';
import 'systemjs.config';


ReactDOM.render(
    <Loader package="component3-package1" component="Email"/>,
    document.getElementById('root3')
);

ReactDOM.render(
    <Loader package="component3-package1" component="Carousel"/>,
    document.getElementById('root2')
);

ReactDOM.render(
    <Loader package="component3-package1" component="DropDown"/>,
    document.getElementById('root')
);


ReactDOM.render(
    <Loader package="component3-package2" component="Accordion"/>,
    document.getElementById('root4')
);


ReactDOM.render(
    <Loader package="component3-package2" component="Hint"/>,
    document.getElementById('root5')
);


ReactDOM.render(
    <Loader package="component3-package1" component="Carousel"/>,
    document.getElementById('root6')
);
