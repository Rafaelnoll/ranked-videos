import { toast, ToastContent, ToastOptions } from "react-toastify";

export function useToast(){
  return (content: ToastContent<unknown>, options?: ToastOptions<unknown> | undefined) => toast(content, options)
}
