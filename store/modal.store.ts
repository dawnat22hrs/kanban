interface IModalStore{
  visible: boolean
  registr: boolean
}

const defaultValue: { modal: IModalStore } = {
  modal: {
    visible: false,
    registr: false
  }
}

export const useModalStore = defineStore('modal', {
  state: () => defaultValue,
  getters: {
    isVisible: state => state.modal.visible, 
    isRegistr: state => state.modal.registr, 
  },
  actions: {
    toggleVisible() {
      this.modal.visible = !this.modal.visible
    },
    toggleRegistr() {
      this.modal.registr = !this.modal.registr
    }
  },
})
