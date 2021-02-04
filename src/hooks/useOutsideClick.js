import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });

    const handleClick = event => {
        if (ref.current && !ref.current.contains(event.target)) callback();
    };
};

export default useOutsideClick;