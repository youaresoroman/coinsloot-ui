import { ToastProps } from "../../Feedback/Toast/index.types";

export interface useToastProps extends ToastProps {
    /**
    * Toast show timeout
    */
    timeout?: number
}