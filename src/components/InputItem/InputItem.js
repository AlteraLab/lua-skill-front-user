import React from 'react';
import './InputItem.css';

const InputItem = ({ name, label, must, placeholder, disabled, value }) => {
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
                />
            </div>
        </div>
    );
};

export default InputItem;