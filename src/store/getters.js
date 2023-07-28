const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  locale: state => state.app.locale,
  size: state => state.app.size,
  sizeHeight: state => state.app.sizeHeight,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  routes: state => state.permission.routes
}
export default getters
