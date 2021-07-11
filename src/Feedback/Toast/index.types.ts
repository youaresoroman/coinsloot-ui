import { ReactChild } from "react";

export interface ToastProps {
  /**
   * Override component classname
   */
  className?: string
  /**
   * Toast key id
   */
  key?: string
  /**
   * Place toast vertical
   */
  placeVertical?: 'top' | 'bottom'
  /**
  * Place toast horizontal
  */
  placeHorizontal?: 'left' | 'center' | 'right'
  /**
   * Toast z-index
   */
  zIndex?: number
  /**
  * Animate toast fadein
  */
  animate?: boolean
  /**
   * Is tost closeable
   */
  closeable?: boolean
  /**
   * Tost content override
   */
  children?: ReactChild
  /**
   * Button action text
   */
  actionText?: string
  /**
   * Tost round corners
   */
  round?: boolean
  /**
   * Show toast
   */
  show?: boolean
  /**
   * Toast message
   */
  message: string
  /**
    * Toast show timeout
    */
  timeout?: number
  /**
  * Optional action handler
  */
  onAction?: () => void
  /**
   * Optional close handler
   */
  onClose?: () => void
}