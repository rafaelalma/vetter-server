module.exports = function logger (req, res, next) {
  console.log(`Request IP: ${req.ip}`)
  console.log(`Request Method: ${req.method}`)
  console.log(`Request Path: ${req.path}`)
  console.log(`Request date: ${new Date()}`)

  next()
}
