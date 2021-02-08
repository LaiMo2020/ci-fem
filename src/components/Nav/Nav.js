import React, { useState, useEffect } from 'react';
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import './styles/Nav.scss';

const Nav = ({ user }) => {
    const [navViewType, setNavViewType] = useState();
    const [isTouch, setIsTouch] = useState();

    useEffect(() => {
        window.addEventListener('resize', handleSetNavViewType);
        handleSetNavViewType();
        return () => window.removeEventListener('resize', handleSetNavViewType);
    }, [user]);

    const handleSetNavViewType = () => {
        const mql = window.matchMedia('(max-width: 700px)');
        const mqlTouch = window.matchMedia('(hover: none)');
        mql.matches ? setNavViewType('mobile') : setNavViewType('desktop');
        mqlTouch.matches ? setIsTouch(true) : setIsTouch(false);
    };

    return (
        <div data-uk-sticky="sel-target: uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav style={navViewType == 'desktop' ? {} : { display: 'none' }} id="desktop-nav" className="uk-navbar-container" data-uk-navbar>
                <DesktopNav user={user} isTouch={isTouch} />
            </nav>
            <nav style={navViewType == 'mobile' ? {} : { display: 'none' }} id="mobile-nav" className="uk-navbar-container" data-uk-navbar>
                <MobileNav user={user} />
            </nav>
        </div>
    );
};

export default Nav;