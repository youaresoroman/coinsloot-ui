export interface useDeviceDisplayTypeProps {
    /**
     * Timeout before update device screen type
     */
    timeout?: number
}

export type useDeviceDisplayTypeReturnType = ["extrasmall" | "small" | "medium" | "large" | "extralarge", (value: string) => void, () => void]

