import React from "react";

import { ContainerProps } from "./index.types";

const Container: React.FC<ContainerProps> = ({
    padding = 'small',
    margin = 'small',
    round = true,
    elevation = 0,
    animated = false,
    classNameOverride = "cl-container",
    children }) => {
    const elevationClassName = "cl-elevation"
    const className = classNameOverride
    const roundToggle = round ? ` ${className}-round` : ''
    const paddingToggle = `${className}-padding-${padding}`
    const margingToggle = `${className}-margin-${margin}`
    const animatedToggle = animated ? ` ${className}-animated` : ""
    const elevationClasses = elevation != 0 ? ` ${elevationClassName} ${elevationClassName}-elevate-${elevation}${roundToggle}${animatedToggle}` : ""

    return <div className={`${className} ${[paddingToggle, margingToggle].join(' ')}${roundToggle}${elevationClasses}`}>
        {children}
    </div>
};

export default Container;
