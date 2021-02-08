import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div id="logo">
            <Link id="logo" to="/">
                <span id="logo-top" className="uk-display-block">
                     <span id="logo-block" className="uk-display-inline-block" />
                     <span id="logo-title">CI FEM</span>
                </span>
                <span id="logo-tagline" className="uk-display-block">
                    Code Institute Frontend Mentor Cohort
                </span>
            </Link>
        </div>
    );
};

