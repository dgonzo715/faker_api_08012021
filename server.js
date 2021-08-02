const express = require('express');
const app = express();
const faker = require('faker');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/api/welcome", (request, response) => {
    console.log("This is the welcome API route");
    console.log(request);
    response.send({message: "Welcome to our API!"})
})

app.post("/api/welcome", (request, response) => {
    console.log(request.body);
    reqBody = request.body;

    const welcomeMessage = `Welcome to our API ${request.body.name}`;

    response.send({
        message: welcomeMessage, 
        requestBody: reqBody
    });
})

app.get("/api/user_object", (req, res) => {
    const name = faker.name.firstName();
    const lname = faker.name.lastName();
    const phone = faker.phone.phoneNumber();
    const email = faker.internet.email();
    const pWord = faker.internet.password();

    res.json({
        firstName: name,
        lastName: lname,
        phoneNumber: phone,
        userEmail: email,
        password: pWord,
    })
 })

 app.get("/api/company_object", (req, res) => {
    const date = faker.date.recent();
    const name = faker.name.firstName();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zipCode = faker.address.zipCode();
    const country = faker.address.country();
    const phone = faker.phone.phoneNumber();
    const email = faker.internet.email();
    const pWord = faker.internet.password();

    res.json({
        recent: date,
        firstName: name,
        streetAddress: address,
        city: city,
        state: state,
        zipCode: zipCode,
        country: country,
        phoneNumber: phone,
        userEmail: email,
        password: pWord,
    })
 })
 
 // start listening for requests on this express app server.
 app.listen(8000, () => console.log("The server is listening on port 8000"));    