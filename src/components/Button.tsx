import React from 'react';

type ButtonProps = {
    name: string
    callBack: () => void
    disBtn: boolean
}
export const Button = (props: ButtonProps) => {

    //   const onClickHandler=()=>{
    //     props.callBack()
    //  }

    return (

        <button onClick={props.callBack} disabled={props.disBtn}>{props.name}</button>

    );
};

