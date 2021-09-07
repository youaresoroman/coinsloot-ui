import { ReactChild } from "react";

interface BadgeProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties
    /**
     * Anchor of the badge
     */
    anchorOrigin?: {
        horizontal?: "left" | "right",
        vertical?: "bottom" | "top"
    }
    /**
     * Badge content
     */
    badgeContent?: string | number | ReactChild
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: "default" | "error" | "primary" | "secondary"
    /**
     * If true, the badge will be invisible.
     */
    invisible?: boolean,
    /**
     * Max count to show.
     */
    max?: number,
    /**
     * Controls whether the badge is hidden when badgeContent is zero.
     */
    showZero?: boolean,
    /**
     * The variant to use.
     */
    variant?: "dot" | "standart",
    /**
     * Wrapped shape the badge should overlap.
     */
    overlap?: "circle" | "standart"
}

export default BadgeProps
