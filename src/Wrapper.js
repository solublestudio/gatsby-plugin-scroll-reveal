
import React, {useEffect} from 'react';
import sal from 'sal.js';

export default function Wrapper({children, path, options}) {
    useEffect(() => {
        sal(options);
    }, [path]);
    return children;
}
