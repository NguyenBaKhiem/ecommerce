import Vue from 'vue'

export default ({ app, store, router }, inject) => {
  const Dialogs = {
    get container () {
      const container = document.getElementById('global-dialogs')
      return container || document.body
    },

    open ({ parent, component, props = {}, events = {} } = {}) {
      return new Promise((resolve, reject) => {
        const InstanceClass = Vue.extend(component)
        let instance = new InstanceClass({
          store,
          router,
          propsData: props,
          parent
        })
        instance.$on('done', resolve)
        instance.$on('error', reject)
        Object.keys(events).forEach((name) => {
          instance.$on(name, events[name])
        })
        instance.$on('close', () => {
          instance.$destroy()
          instance.$el.remove()
          instance = null
        })
        instance.$mount()
        this.container.appendChild(instance.$el)
      })
    },

    flush () {
      this.container.innerHTML = ''
    }
  }

  inject('dialogs', Dialogs)
}
