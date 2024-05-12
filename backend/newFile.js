/** @format */

const { app, db } = require("./server");

app.post("/login", (res, req) => {
  const email = req.body.email;
  const password = req.body.tenant_password;
  db.query(
    "SELECT * FROM tenant WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password " });
      }
    }
  );
});
