import React from "react";

import { TypographyProps } from "./index.types";

const Typography: React.FC<TypographyProps> = ({ foo, className="cl-typography" }) => (
    <div className={`${className}`}>{foo}</div>
);

export default Typography;
