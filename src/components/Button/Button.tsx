import React, {FC, useState} from 'react';
import style from './Button.module.scss'

export enum ButtonVariant {
    disabled = 'disabled',
    submit = 'submit'
}

interface ButtonProps {
    variant?: ButtonVariant;
    onClick?: (arg?: any) => void;
    value?: string;
    className?: string;
    disabled?: boolean;
}

const Button: FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> =
    ({
         onClick,
         children,
         variant,
         value,
         className,
         disabled,
     }) => {
        return (
            <button
                className={style.button + ` ${className ? className : ''}`}
                value={value}
                disabled={disabled}
                onClick={onClick}
                style={{
                    backgroundColor: variant === ButtonVariant.submit ? '#52CF4F' :
                        variant === ButtonVariant.disabled ? '#AFAFAF' : '#4B51EF',
                }}
            >{children}
            </button>
        );
    };

export default Button;