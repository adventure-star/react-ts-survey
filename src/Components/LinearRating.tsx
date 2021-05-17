import React, { FunctionComponent } from "react";
import RatingItem from "./RatingItem";

interface Props {
    value: number;
}

const LinearRating: FunctionComponent<Props> = ({value}) => {
    return (
        <div className="w-auto sm:w-full flex items-center justify-items-center sm:justify-between px-2 mx-auto">
            <div className="flex">
               <RatingItem value={value} threshold={1}/>
               <RatingItem value={value} threshold={2}/>
               <RatingItem value={value} threshold={3}/>
               <RatingItem value={value} threshold={4}/>
               <RatingItem value={value} threshold={5}/>
            </div>
            <div className="text-black">
                {value}
            </div>
        </div>
    )
}

export default LinearRating;