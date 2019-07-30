let faker = require("faker");
let requestim = require("request");
exports.handler = function (request, response) {

    requestim("http://www.google.com", (error, response, body) => {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
    });
    response.send({ "message": faker.internet.userName() });
}