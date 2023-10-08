import React from 'react';
type HeaderPropsType = {
    headerNames: string[]
}

export function HeaderInside(props: HeaderPropsType) {
    return (<div>
        <a href="src/components/Header/HeaderInside#">{props.headerNames[0]}</a>
        <a href="src/components/Header/HeaderInside#">{props.headerNames[1]}</a>
        <a href="src/components/Header/HeaderInside#">{props.headerNames[2]}</a>
    </div>)
}

export default HeaderInside;