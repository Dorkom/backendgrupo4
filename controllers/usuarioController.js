import usuarioHelper from "../helpers/userHelper.js";
import authHelper from "../helpers/auth.js";

const { create, findUser } = usuarioHelper;
const { generateJWT, checkAuth } = authHelper;

const createUser = async (req, res) => {
  const result = await create(req.body);
  return sendResponse(result, res);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await findUser("email", email);
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario o Contraseña Incorrecto",
      });
    }
    if (password != usuario.password) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario o Contraseña Incorrecto",
      });
    }

    const token = await generateJWT(usuario.id);

    return res
      .status(200)
      .json({ ok: true, token, id: usuario.id, name: usuario.name });
  } catch (error) {
    console.log(error);
    /* return sendResponse(usuario, res); */
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUser("id", id, true);

    res.json(user);
  } catch (error) {
    console.log(error);
    return sendResponse(user, res);
  }
};

const putUser = async (req, res) => {
  const { name, lastName, email, address, country, cp, city, phone } = req.body;
  try {
    const { id } = req.params;
    const user = await findUser("id", id);
    user.lastName = name;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.country = country;
    user.cp = cp;
    user.city = city;
    user.phone = phone;
    const response = await user.save();

    res.status(200).json({ msg: "changes successfull", response });
  } catch (error) {
    console.log(error);
    sendResponse(response, res);
  }
};

const verifyAuth = (req, res) => {
  const { token } = req.body;
  const resp = checkAuth(token);
  res.status(200).json(resp);
};

const sendResponse = (result, res) => {
  if (result) return res.status(200).json(result);
  else return res.status(500).json({ message: "An error has ocurred." });
};

const usuarioController = { createUser, login, getUser, verifyAuth, putUser };

export default usuarioController;
