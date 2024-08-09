const dbConnect = require("../../config/dBConfig")
const jwt = require('jsonwebtoken')
const client = dbConnect();

const checkUser = (req, res) => {
  const { email, password } = req.body;

  client.query('SELECT * FROM users WHERE email = $1 ', [email], (err, results) => {
    if (err) {
      throw err
    }
    if (results.rowCount == 0) {
      res.status(200).json({ message: "Not Exist" });
    }
    else {

      client.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, password], (err, results) => {
        
        if (err) {
          throw err
        }
        if (results.rowCount == 0) {
          res.status(200).json({ message: "Not Match" });
        }

        else{
          const accessToken = jwt.sign({
            id:results.rows[0].uid
          },
          "secret",
          {
            expiresIn: "1d"
          }
        )
          res.status(200).json({result:results.rows,accessToken:accessToken});
        }
        
      })


    }
  })
};

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


module.exports = {
  checkUser,
  createUser,
  emailExist
}