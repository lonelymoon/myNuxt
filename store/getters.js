import crypto from 'crypto'

function jiemi(str, secret) {
  let decipher = crypto.createDecipher('aes192', secret)
  let dec = decipher.update(str, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}

export default {
  getUserInfo(state) {
    return JSON.parse(jiemi(state.user, 'gamelife'))
  }
}
