import React from 'react';
import _ from 'lodash';

import './style.css';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component2aHeader: null
        }
    }

    componentDidMount() {
        // dynamically load component2a
        SystemJS.import('component2a').then(components => {
           this.setState({
               component2aHeader: components.Header
           });
        });
    }

    render() {
        const value = _.take([2, 3, 1])[0];
        let childContent = null;
        if (this.state.component2aHeader != null) {
            childContent = <this.state.component2aHeader/>;
        }
        return (
            <div>
                <div className="header">Component {value} - cas</div>
                <div>{childContent}</div>
            </div>
        );
    }
}