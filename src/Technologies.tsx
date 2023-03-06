import React from 'react';

type TechnologiePropsType = {
    technologiesNames: string[]
}

export function Technologies(props: TechnologiePropsType) {
    return (
        <div>
            <ul>
                <li>{props.technologiesNames[0]}</li>
                <li>{props.technologiesNames[1]}</li>
                <li>{props.technologiesNames[2]}</li>
            </ul>
        </div>
    )
}

export default Technologies;