const dbConnect = require("../../config/dBConfig")

const client = dbConnect();

const getUsers = (req, res) => {
  client.query("SELECT * FROM users where role = 'user'", (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}