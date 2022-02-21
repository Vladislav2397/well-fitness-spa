import { NotificationService } from '../applied/ports'

const useNotification = (): NotificationService => {
    return {
        notify: (message) => window.alert(message),
    }
}

export default useNotification
