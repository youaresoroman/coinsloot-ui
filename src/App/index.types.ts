import { ReactChild } from "react";

export interface AppProps {
    /**
     * Override component classname
     */
    className?: string
    /**
    * Container content
    */
    children: ReactChild
    //  /**
    //  * Parameter name of interface theme to save in browser
    //  */
    //   themeName?: string
}
