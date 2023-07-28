import { loginByTicket, getCurrentUserinfo } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  loginByTicket({ commit }, params) {
    return new Promise((resolve, reject) => {
      loginByTicket(params).then(response => {
        const { message, data } = response
        const authorization = data.authorization
        if (!authorization) {
          return reject(message || '登录失败，请重试')
        }
        commit('SET_TOKEN', authorization)
        setToken(authorization, true)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getCurrentUserinfo().then(response => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        const { username, avatar, menus } = data
        console.log(data, 'data')
        commit('SET_NAME', username)
        commit('SET_AVATAR', avatar)
        const roles = []
        menus.forEach(item => {
          roles.push(item.menuName)
        })
        commit('SET_ROLES', roles)
        resolve(roles)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

