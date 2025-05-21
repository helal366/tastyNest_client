import React from 'react';
import { Tooltip } from 'react-tooltip';

const TooltipInstructions = ({instructions}) => {
    return (
        <div>
            <a data-tooltip-id='my-tooltip' className='border border-teal-700 text-xs py-4 px-8 bg-white rounded '>Hover to Read More</a>
            <Tooltip className='max-w-[1000px]'
             id='my-tooltip'>
                <p>{instructions}</p>
            </Tooltip>
        </div>
    );
};

export default TooltipInstructions;