import React from 'react';
import _ from 'lodash';

import './style.css';

export default class Loader extends React.Component {

    static propTypes = {
        package: PropTypes.string.isRequired,
        component: PropTypes.string.isRequired
    };
    
    constructor(props) {
        super(props);
        this.state = {
            childComponent: null
        }
    }

    componentDidMount() {
        // dynamically load component3-package
        SystemJS.import(this.props.package).then(package => {
           this.setState({
               childComponent: package[this.props.component]
           });
        });
    }

    render() {
        const value = _.take([3, 2, 1])[0];
        let childContent = null;
        if (this.state.childComponent != null) {
            childContent = <this.state.childComponent/>;
        }
        return (
            <div>
                <div className="loader">Component {value} Loader - cas-loader</div>
                <div>{childContent}</div>
            </div>
        );
    }
}