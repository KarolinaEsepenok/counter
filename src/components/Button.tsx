import React from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
    disBtn: boolean
}
export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.callBack} disabled={props.disBtn}>{props.name}</button>

    );
};

