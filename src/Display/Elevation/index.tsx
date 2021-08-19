import React from "react";

import ElevationProps from "./index.types";

const Elevation: React.FC<ElevationProps> = ({
    height = 1,
    round = true,
    className = "cl-elevation",
    children }) => {

    const roundToggle = round ? ` ${className}-round` : ''
    const classesToInject = `${className} ${className}-elevate-${height}${roundToggle}`

    const StyledChildren = () => {
        console.log(children)
        if (React.isValidElement(children)) {
            //console.log(children)
            
            return React.cloneElement(children, {
                className: `${children.props.className} ${classesToInject}`
            })
        } else {
            return <div></div>
        }
    }

    return <StyledChildren />
};

export default Elevation;
