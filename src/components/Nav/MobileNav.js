import React from 'react';

const MobileNav = ({ user }) => {
    return (
        <>
            <div className="uk-navbar-left">mobile logo</div>
            <div className="has-pointer uk-navbar-right">
                <span className="uk-navbar-toggle" data-uk-icon="icon: menu" />
            </div>
        </>
    );
};

export default MobileNav;