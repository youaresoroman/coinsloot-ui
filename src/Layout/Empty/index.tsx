import React from "react";

import { EmptyProps } from "./index.types";

const Empty: React.FC<EmptyProps> = ({
    round = true,
    border = false }) => {
    const className = "cl-empty-box"
    const roundToggle = round ? ` ${className}-round` : ''
    const borderToggle = border ? ` ${className}-border` : ''
    return (
        <div className={`${className}${roundToggle}${borderToggle}`} />
    )
};

export default Empty;
