import React from 'react';
import './InputItem.css';
import {input} from 'react-inputs-validation';

const InputItem = ({ name, label, must, placeholder, disabled, value, onChange }) => {
    const inputItemClass='InputItem'
    let inputItem = must ? `${inputItemClass} must` : inputItemClass;
    let color = disabled ? '#EDEDED' : 'white';
    return (
        <div className={inputItem}>
            <strong className="input-title">
                <label htmlFor={label}>
                    {name}
                </label>
            </strong>
            <div className="input-element">
                <input 
                    id={label} 
                    placeholder={placeholder} 
                    disabled={disabled} 
                    style={{
                        backgroundColor: color
                    }}
                    value={value}
                    name={label}
                    /*onChange={(value,e) =>{
                        this.setState({value});   
                        console.log(e); 
                    }}
                    onBlur={(e) => {console.log(e)}}
                    validationOption={{
                        name:'label',
                        check: true,
                        required:true}}*/
                />
            </div>
        </div>
    );
};

export default InputItem;