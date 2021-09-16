
import { getDeviceType } from "."

type useDeviceTypeDetectReturnTypes = ReturnType<typeof getDeviceType>

export type useDeviceTypeDetectTypes = [useDeviceTypeDetectReturnTypes, (value: useDeviceTypeDetectReturnTypes) => void, () => void]