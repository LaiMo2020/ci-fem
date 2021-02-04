import React, { useState, useEffect } from 'react';
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import './styles/Nav.scss';

const BaseNav = ({ user }) => {
    const [navViewType, setNavViewType] = useState();

    useEffect(() => {
        window.addEventListener('resize', handleSetNavViewType);
        handleSetNavViewType();

        return () => window.removeEventListener('resize', handleSetNavViewType);
    }, [user]);

    const handleSetNavViewType = () => {
        const mql = window.matchMedia('(max-width: 600px)');
        mql.matches ? setNavViewType(<MobileNav user={user} />) : setNavViewType(<DesktopNav user={user} />);
    };

    return (
        <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav id="nav" className="uk-navbar-container" data-uk-navbar>
                {navViewType}
            </nav>
        </div>
    );
};

export default BaseNav;