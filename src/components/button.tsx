import React from 'react';


type propsButton = {
    callbackCount: () => void
    children?: React.ReactNode
    getDisable?: boolean
    stopCount?: number

}
export const Button: React.FC<propsButton> = (props) => {


    const {callbackCount, children, getDisable,stopCount ,...Rest} = props

    return (
        <div>
            <button disabled={getDisable}
                    onClick={callbackCount}>
                    {children}
            </button>
        </div>
    );
};

export default Button;