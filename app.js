/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable no-path-concat */
const express = require('express');

const app = express();
app.use(express.json());
const { sequelize, User } = require('./models');
const port = 5000;

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, async () => {
  console.log(`Server running on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log('Database Connected');
});



