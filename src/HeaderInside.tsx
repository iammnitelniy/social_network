import React from 'react';
type HeaderPropsType = {
    headerNames: string[]
}

export function HeaderInside(props: HeaderPropsType) {
    return (<div>
        <a href="#">{props.headerNames[0]}</a>
        <a href="#">{props.headerNames[1]}</a>
        <a href="#">{props.headerNames[2]}</a>
    </div>)
}

export default HeaderInside;