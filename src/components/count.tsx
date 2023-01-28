import React from 'react';

type propsCount = {
    count:number
    stopCount: number
}

export const Count: React.FC<propsCount> = ({count,stopCount}) => {
    return (
        <div className={count>=stopCount ? 'red' : ''}>{count}</div>
    );
};

export default Count;