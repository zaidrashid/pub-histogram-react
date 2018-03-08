import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="title jumbotron">
                <h2 className="display-1">Publication Histogram</h2>
                <p className="lead">
                    A histogram of publication (across years)
                    based on queries in Europe PMC.
                </p>
            </div>
        );
    }
}