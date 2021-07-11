import React from "react";

import { ElevationProps } from "./index.types";

const Elevation: React.FC<ElevationProps> = ({
    height = 1,
    round = true,
    className = "cl-elevation",
    children }) => {
    const roundToggle = round ? ` ${className}-round` : ''
    return (
        <div className={`${className} ${className}-elevate-${height}${roundToggle}`}>
            {children}
        </div>
    )
};

export default Elevation;
