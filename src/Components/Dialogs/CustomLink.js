import React from 'react';
import {Link,useMatch}from 'react-router-dom'

function CustomLink({children,to, ...props}) {
    const match = useMatch(to)
    return (
        <Link
            to={to}
            style={{
                color:match?"#d76f6f":"green"
            }}
            {...props}>
            {children}
        </Link>
    );
}

export default CustomLink;