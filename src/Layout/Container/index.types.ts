import { ReactChild } from "react";

export interface ContainerProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Container paddings
     */
    padding?: 'small' | 'medium' | 'large'
    /**
     * Container margins
     */
    margin?: 'small' | 'medium' | 'large'
    /**
     * Container round corners
     */
    round?: boolean
    /**
     * Container content
     */
    children: ReactChild
}
