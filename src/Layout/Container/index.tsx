import React from "react";

import { ContainerProps } from "./index.types";

const Container: React.FC<ContainerProps> = ({
    padding = 'small',
    margin = 'small',
    round = true,
    elevation = 0,
    animated = false,
    className = "",
    style = {},
    onClick,
    children }) => {
    const elevationClassName = "cl-elevation"
    const containerClassName = "cl-container"
    const roundToggle = round ? ` ${containerClassName}-round` : ''
    const paddingToggle = `${containerClassName}-padding-${padding}`
    const margingToggle = `${containerClassName}-margin-${margin}`
    const animatedToggle = animated ? ` ${containerClassName}-animated` : ""
    const elevationClasses = elevation != 0 ? ` ${elevationClassName} ${elevationClassName}-elevate-${elevation}${roundToggle}${animatedToggle}` : ""
    const classes = `${containerClassName} ${[paddingToggle, margingToggle].join(' ')}${roundToggle}${elevationClasses}${className ? " " + className : ""}`

    return <div
        className={classes}
        style={style}
        onClick={onClick ? onClick : () => { null }}
    >
        {children}
    </div>
};

export default Container;
