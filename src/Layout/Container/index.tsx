import React from "react";

import { ContainerProps } from "./index.types";

const Container: React.FC<ContainerProps> = ({
    padding = 'small',
    margin = 'small',
    round = true,
    className = "cl-container",
    children }) => {
    const roundToggle = round ? ` ${className}-round` : ''
    const paddingToggle = `${className}-padding-${padding}`
    const margingToggle = `${className}-margin-${margin}`
    return (
        <div className={`${className} ${[paddingToggle, margingToggle].join(' ')}${roundToggle}`}>
            {children}
        </div>
    )
};

export default Container;
