const getters = {
  loading: state => key => (key ? state.app.loading.indexOf(key) >= 0 : state.app.loading.length > 0),
  unr: state => state.app.unread_msg_amount,
  pageShow:state=>state.app.pageShow
}
export default getters
