const dbConnect = require("../../config/dBConfig")

const client = dbConnect();

const getUsers = (req, res) => {
  client.query('SELECT * FROM users', (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
  })
}

const emailExist = (req, res) => {

  const { email } = req.body;
  client.query('SELECT * FROM users WHERE email = $1', [email], (err, results) => {
    if (err) {
      throw err
    }
    else {
      if (results.rowCount > 0) {
        res.status(200).json(results.rowCount)
      }

      else {
        createUser(req, res);
      }
    }

  })
}
const createUser = (req, res) => {
  const { name, email, password, contact, address, role } = req.body

  client.query('INSERT INTO users (name,email,password,contact,address,role) VALUES($1, $2, $3, $4, $5,$6)', [name, email, password, contact, address, role], (err, results) => {
    if (err) {
      throw err
    }
    res.status(201).send(`User added successfully`)

  })

};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { name, email, password, contact, address, role } = req.body
  client.query(
    'UPDATE users SET name = $1, email = $2, password = $3, contact = $4, address = $5, role=$6 WHERE uid = $7',
    [name, email, password, contact, address, role, id],
    (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).send(`User updated successfully`)
    }
  )
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  client.query('DELETE FROM users WHERE uid = $1', [id], (err, results) => {
    if (err) {
      throw err
    }
    res.status(200).send(`User deleted`)
  })
}

module.exports = {
  getUsers,
  emailExist,
  createUser,
  updateUser,
  deleteUser,
}