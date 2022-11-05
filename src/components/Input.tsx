import React, {ChangeEvent} from 'react';
import s from './Input.module.css'

type InputProps = {
    title: string
    onChange: (e:number) => void
    error: boolean
    value:number
    setError:()=>void
}
export const Input = (props: InputProps) => {

    const onChangeHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        props.onChange(parseInt(e.currentTarget.value))
        props.setError()
    }

    return (
      <div className={s.inputContainer}>
          <input type={'number'} onChange={onChangeHandler} value={props.value} title={props.title}/>
      </div>

    );
};

