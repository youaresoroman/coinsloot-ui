interface PlaceContentProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties
    /**
     * Centering items
     */
    verticalDirection: "top" | "bottom" | "center",
    /**
     * Centering items
     */
    horizontalDirection: "right" | "left" | "center",
}

export default PlaceContentProps
