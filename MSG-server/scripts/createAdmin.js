const readline = require("readline");
const User = require("../models/userModel");
const axios = require("axios");

async function createAdmin() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter admin username: ", async (name) => {
    rl.question("Enter admin email: ", async (email) => {
      rl.question("Enter admin password: ", async (password) => {
        console.log(`Your email is ${email} and your password is ${password}`);

        await axios
          .post("http://localhost:5000/api/v1/user/register", {
            name,
            email,
            password,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err.response.data.message);
          });

        rl.close();
      });
    });
  });

  rl.on("close", () => {
    process.exit(0);
  });
}

createAdmin();
