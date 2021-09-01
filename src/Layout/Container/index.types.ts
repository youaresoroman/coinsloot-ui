import { ReactChild } from "react";

export interface ContainerProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Container paddings
     */
    padding?: 'none' | 'small' | 'medium' | 'large'
    /**
     * Container margins
     */
    margin?: 'none' | 'small' | 'medium' | 'large'
    /**
     * Container round corners
     */
    round?: boolean
    /**
     * Custom styles
     */
    style?: React.CSSProperties
    /**
     * On/Off animation
     */
    animated?: boolean
    /**
    * Optional click handler
    */
    onClick?: () => void
    /**
   * Elevation
   */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5
}
