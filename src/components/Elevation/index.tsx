// eslint-disable-next-line no-unused-vars
import React, { ReactChild } from 'react'
import styles from '../index.css'

interface ElevationProps {
  /**
   * Elevation height
   */
  height?: 1 | 2 | 3 | 4 | 5
  /**
   * Elevation content
   */
  children: ReactChild
}

/**
 * Elevation component
 */

export const Elevation = ({ height = 1, children }: ElevationProps) => {
  return (
    <div style={styles} className={`cl-elevation elevate-${height}`}>
      {children}
    </div>
  )
}
