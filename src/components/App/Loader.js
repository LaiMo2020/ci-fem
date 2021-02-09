import React, { useEffect, useRef } from 'react';
import { TimelineLite } from 'gsap';

export default () => {
    const ref = useRef();

    useEffect(() => {

        const tl = new TimelineLite({ repeat: -1 });
        tl.to(ref.current, { color: '#225aea', delay: 1, duration: 1 }); // darkblue
        tl.to(ref.current, { color: '#222', duration: 1 }); // black

        return () => {
            tl.kill();
        }
    }, []);

    return (
        <div id="loader">
            <div ref={ref} className="uk-position-center">
                <div data-uk-spinner="ratio: 3" />
            </div>
        </div>
    );
};