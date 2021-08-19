import { ReactNode } from "react";

interface ElevationProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Elevation height
     */
    height?: 1 | 2 | 3 | 4 | 5
    /**
     * Elevation round corners
     */
    round?: boolean
    /**
     * Container content
    */
    children: ReactNode
}

export default ElevationProps