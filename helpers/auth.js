import jwt from "jsonwebtoken";

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(payload, "MyS3cr3tK3y", { expiresIn: "12h" }, (err, token) => {
      if (err) {
        console.log(err);
        reject("No se pudo generar el token");
      } else {
        resolve(token);
      }
    });
  });
};

const checkAuth = (token) => {
  try {
    const { id } = jwt.verify(token, "MyS3cr3tK3y");
    return [true, id];
  } catch (error) {
    console.log(error);
    return [false, null];
  }
};

const authHelper = { generateJWT, checkAuth };
export default authHelper;
