
import {registerComponent} from './component/registerComponent'
export default {
    install(app, options) {
        registerComponent(app)
    }
}
