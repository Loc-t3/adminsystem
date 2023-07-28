import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo, theme } = defaultSettings

function getItem(key, def) {
  return localStorage.getItem(key) === null ? def : localStorage.getItem(key)
}

function setItem(key, value) {
  localStorage.setItem(key, value)
}

const state = {
  showSettings: getItem('showSettings', showSettings),
  fixedHeader: getItem('fixedHeader', fixedHeader),
  sidebarLogo: getItem('sidebarLogo', sidebarLogo),
  theme: getItem('theme', theme)
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
      setItem(key, value)
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

