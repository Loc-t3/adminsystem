import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  locale: localStorage.getItem('locale') || 'zh_CN',
  size: localStorage.getItem('size') || 'medium',
  sizeHeight: localStorage.getItem('sizeHeight') || 38
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_LOCALE: (state, locale) => {
    state.locale = locale
    localStorage.setItem('locale', locale)
  },
  SET_SIZE: (state, size) => {
    state.size = size
    localStorage.setItem('size', size)
    let sizeHeight = 38
    if (size === 'mini') {
      sizeHeight = 26
    } else if (size === 'small') {
      sizeHeight = 30
    }
    state.sizeHeight = sizeHeight
    localStorage.setItem('sizeHeight', sizeHeight)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setLocale({ commit }, locale) {
    commit('SET_LOCALE', locale)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
