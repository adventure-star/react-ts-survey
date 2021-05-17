import React, { FunctionComponent, Component } from "react";
import Header from './Header';

interface Props {
    children: React.ReactNode;
}


const WithHeaderLayout: FunctionComponent<Props> = ({children}) => {

    return (
        <div>
            <Header />
            <div className="">
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WithHeaderLayout;