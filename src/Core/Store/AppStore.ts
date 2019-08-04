import { decorate } from 'mobx'

class AppStore {
    public title = 'Logins sample'
}

decorate(AppStore, {
})

export default AppStore
