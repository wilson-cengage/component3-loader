import React, { PropTypes } from 'react';

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
        SystemJS.import(this.props.package).then(module => {

            debugger;
            console.log(this.props);
            console.log(module);
           this.setState({
               childComponent: module[this.props.component]
           });
        });
    }

    render() {
        let childContent = null;
        if (this.state.childComponent != null) {
            childContent = <this.state.childComponent/>;
        }
        return (
            <div>
                <div className="loader">Component3 Loader - cas-loader</div>
                <div>{childContent}</div>
            </div>
        );
    }
}