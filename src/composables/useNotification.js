import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export function useNotifications() {
  const $toast = useToast()

  function openToast(message, type) {
    $toast.open({
      message: message,
      type: type
    })
  }

  function success(message) {
    openToast(message, 'success')
  }

  function error(message) {
    openToast(message, 'error')
  }

  function info(message) {
    openToast(message, 'info')
  }

  return {
    success,
    error,
    info
  }
}
