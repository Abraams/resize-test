class DeviceResizeObserver {
    #width
    state = {
        isMobile: false,
        isDesktop: false
    }

    constructor () {
        this.#width = window.innerWidth
        this.#initObserver()
    }

    #initObserver() {
        this.#updateState()
        window.addEventListener('resize', this.#onResize.bind(this))
    }

    #onResize(event) {
        this.#width = event.target.innerWidth
        this.#updateState()
    }

    #updateState() {
        this.state.isMobile = this.#width <= 500
        this.state.isDesktop = this.#width > 500
    }
}

const observer = new DeviceResizeObserver()
export const deviceObserverState = observer.state

export default observer
