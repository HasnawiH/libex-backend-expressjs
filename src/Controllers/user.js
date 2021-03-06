require("dotenv").config();
const userModel = require("../Models/user");
const formResponse = require("../Helpers/formResponse");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const crypto = require("crypto-js");
const secret = process.env.TOKEN_SECRET;

const formValidation = data => {
  const schema = joi.object().keys({
    name: joi
      .string()
      .min(3)
      .required(),
    email: joi
      .string()
      .email({ minDomainSegments: 2 })
      .required(),
    password: joi
      .string()
      .min(8)
      .required(),
    level: joi.string().required()
  });
  const result = schema.validate(data);

  if (result.error == undefined) return true;
  else return false;
};

const hash = string => {
  return crypto.SHA256(string).toString(crypto.enc.Hex);
};

const userController = {
  register: (req, res) => {
    const body = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      level: "user"
    };
    const isValid = formValidation(body);
    if (!isValid) {
      formResponse.success(res, 401, { error: "Invalid Data!" });
    }

    if (isValid) {
      body.password = hash(body.password);

      userModel
        .getUserByEmail(body.email)
        .then(result => {
          if (result.length === 0) {
            userModel.register(body).then(rsult => {
              userModel
                .getLastID()
                .then(id => {
                  const data = {
                    id: id[0]["MAX (id)"],
                    name: req.body.name,
                    email: req.body.email,
                    level: "user"
                  };

                  formResponse.success(res, 200, { error: "success" }, data);
                })
                .catch(error => {
                  res.json(error);
                });
            });
          } else {
            formResponse.success(res, 403, {
              error: "Email is already registered!"
            });
          }
        })
        .catch(error => {
          res.json(error);
        });
    }
  },

  login: (req, res) => {
    const email = req.body.email;
    const password = hash(req.body.password);
    // const password = req.body.password;
    console.log("login ", email, " ", password);
    userModel
      .login(email, password)
      .then(result => {
        if (result.length !== 0) {
          const payload = { ...result[0], expiresIn: "1h" };

          jwt.sign(payload, secret, (err, token) => {
            if (err) {
              console.error(err);
            }

            res.setHeader("Authorization", `Bearer ${token}`);
            // res.json({ token: `Bearer ${token}`})
            const data = {
              user: {
                // ...result[0]
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                level: result[0].level
              },
              token
            };
            // console.log(`ini`, token);
            formResponse.success(res, 200, {}, data);
          });
        } else {
          const data = {
            user: null,
            token: null
          };
          formResponse.success(
            res,
            401,
            { error: "Wrong email or password!" },
            data
          );
        }
      })
      .catch(error => {
        res.json(error);
      });
  }
};

module.exports = userController;
