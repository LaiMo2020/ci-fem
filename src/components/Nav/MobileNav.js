import React from 'react';
import Logo from '../App/Logo';
import OffCanvasNav from './OffCanvasNav';

const MobileNav = ({ user }) => {
    return (
        <>
            {/* logo */}
            <div className="uk-navbar-left">
                <Logo />
            </div>

            {/* toggle */}
            <div className="has-pointer uk-navbar-right">
                <span className="uk-navbar-toggle" data-uk-icon="icon: menu" data-uk-toggle="target: #off-canvas-nav" />
            </div>

            {/* off canvas */}
            <div id="off-canvas-nav" data-uk-offcanvas="mode: push; overlay: true; flip: true">
                <div className="uk-offcanvas-bar">
                    <button className="uk-offcanvas-close" type="button" data-uk-close />
                    <h3>
                        <Logo />
                        <span id="logo-tagline" className="uk-display-block">
                            Code Institute Frontend Mentor Cohort
                        </span>
                    </h3>

                    {/* off canvas nav */}
                    <OffCanvasNav user={user} />
                </div>
            </div>
        </>
    );
};

export default MobileNav;