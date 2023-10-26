const getters = {
  loading: state => key => (key ? state.app.loading.indexOf(key) >= 0 : state.app.loading.length > 0),
}
export default getters
