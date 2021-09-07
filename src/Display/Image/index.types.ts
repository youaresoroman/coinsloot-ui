interface ImageProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties,
    src: string,
    alt: string,
    /**
    * Optional click handler
    */
    onClick?: () => void
}

export default ImageProps
