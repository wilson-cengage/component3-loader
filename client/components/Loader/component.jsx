import React, { PropTypes } from 'react';
import ComponentRegistry from 'component-registry/client/app/ComponentRegistry';

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
        this.componentRegistry = new ComponentRegistry();
    }

    componentDidMount() {
        // dynamically load component3-package
        this.componentRegistry.load(this.props.package, this.props.component, (loadedComponent) => {
            this.setState({
                childComponent: loadedComponent
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
                <div className="loader">Loading {this.props.package}/{this.props.component}...</div>
                <div>{childContent}</div>
            </div>
        );
    }
}