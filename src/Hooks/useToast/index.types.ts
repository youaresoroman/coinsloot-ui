import ToastProps from "../../Feedback/Toast/index.types";

interface useToastProps extends ToastProps {
    /**
    * Toast show timeout
    */
    timeout?: number
}

export default useToastProps