// 手机号码
export function validatePhone(value) {
  return /^1[3456789]\d{9}$/.test(value)
}

// 密码
export function validatePassword(value) {
  return /^[0-9a-zA-Z]{6,16}$/.test(value)
}

// 邮箱
export function validateEmail(value) {
  return /^[\w.-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/.test(value)
}
