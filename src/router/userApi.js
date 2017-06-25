import express from 'express';

export default function userApi() {
  const router = express.Router();

  router.post('/user/register', (req, res, next) => {
    const user = req.body.user;
    const password = req.body.password;
    res.send("register user = " + user +
     " with password = " + password);
  });

  return router;
}