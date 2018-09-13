import Cookies from 'js-cookie'

export default {
  saveCookies(state) {
    state.user = Cookies.get('user') || null
  }
}
