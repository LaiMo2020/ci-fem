import React, { useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap';

const Loader = () => {
    const ref = useRef();

    useEffect(() => {

        const tl = new TimelineLite({repeat: -1});
        tl.to(ref.current, { color: '#3854a0',duration: 1}); // darkblue
        tl.to(ref.current, { color: '#000',duration: 1}); // black
        tl.to(ref.current, { color: '#f72d4d',duration: 1}); //red
        tl.to(ref.current, { color: '#000',duration: 1}); // black

        return () => {
            tl.kill();
        }
    }, []);

    return (
        <div ref={ref} className="uk-position-center">
            <div data-uk-spinner="ratio: 3" />
        </div>
    );
};

export default Loader;