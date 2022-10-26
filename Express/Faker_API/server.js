const { Router } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const { faker } = require("@faker-js/faker");


const createUser = () => {
  const newFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone_Number: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
  return newFake;
};

const createCompany = () => {
  const newFakeCompany = {
    _id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    address: faker.address.street(),
    city: faker.address.city(),
    state: faker.address.state(),
    zip_Code: faker.address.zipCode(),
    country: faker.address.country(),
  };
  return newFakeCompany;
};

app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const userCompany = {
    newUser: createUser(),
    newCompany: createCompany(),
  };

  res.json(userCompany);


});

app.listen(PORT, () => {
  console.log(`Changed Something is up and running on port ${PORT}`);
});