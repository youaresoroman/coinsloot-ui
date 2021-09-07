interface PictureProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties,
    source: {
        media: string,
        srcset: string,
        type?: string
    }[]
    src: string,
    alt: string,
    /**
    * Optional click handler
    */
     onClick?: () => void
}

export default PictureProps
