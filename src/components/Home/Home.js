import React, { useEffect } from 'react';
import { resetTitle } from "../../utils/componentHelpers";

const Home = () => {

    useEffect(() => {
        resetTitle();
    }, []);

    return (
        <>
            Home
        </>
    );
};

export default Home;