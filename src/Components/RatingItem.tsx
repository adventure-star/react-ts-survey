import React from "react";

interface Props {
    value: number; 
    threshold: number;
}

const RatingItem: React.FC<Props> = ({value, threshold}) => {
    return (
        <div className="w-2 h-6 mr-1 bg-gray-300">
            {value > threshold &&
                <div className="w-full h-full bg-green-500"></div>
            }
            {Math.ceil(value) == threshold && value < threshold &&
                <div className="h-full bg-green-500" style={{ width: (value - threshold + 1) * 100 + "%" }}></div>
            }
        </div>
    )
}

export default RatingItem;