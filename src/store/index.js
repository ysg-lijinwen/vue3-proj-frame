import { createStore } from 'vuex'

export default createStore({
  state: {
    themeColor: '409eff'
  },
  mutations: {
    //更新主题颜色
    setThemeColor (state, curColor) {
      this.state.themeColor = curColor
    }
  },
  actions: {
  },
  modules: {
  }
})
