import { users } from "../database.js"; // always add js when importing from files in your code

const addUsers = (req, res) => {
  const obj = req.body;

  const check = database.find((user) => user.email === obj.email);

  if (!obj.name) {
    res.status(400).json({
      message: "Name is compulsory",
    });
    return;
  }

  if (check) {
    res.status(400).json({
      message: "Email already exist",
    });
    return;
  }

  const newData = {
    id: database.length,
    name: obj.name,
    email: obj.email,
    password: obj.password,
  };

  users.push(newData);

  res.json(users);
};

export default addUsers;
