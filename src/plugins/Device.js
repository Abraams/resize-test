import { deviceObserverState } from "@/services/DeviceResizeObserver";

export default {
    install(Vue) {
        Vue.prototype.$device = Vue.observable(deviceObserverState)
    }
};

