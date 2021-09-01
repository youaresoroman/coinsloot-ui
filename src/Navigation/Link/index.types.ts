interface LinkProps {
    /**
     * Override component classname
     */
    className?: string
    /**
     * Custom styles
     */
    style?: React.CSSProperties
    /**
    * Optional click handler
    */
    onClick?: () => void
    /**
    * Link url
    */
    url: string
    /**
    * HTML <a> target Attribute
    */
    target?: "_blank" | "_self" | "_parent" | "_top" | string,
    /**
     * HTML <a> rel Attribute
     */
    rel?: "alternate" | "author" | "bookmark" | "external" | "help" | "license" | "next" | "nofollow" | "noopener" | "noreferrer" | "prev" | "search" | "tag",
    /**
     * Link color style
     */
    color?: "primary" | "secondary" | "default"
}

export default LinkProps
