let faker = require("faker");
let request = require("request");
exports.handler = function(request, response) {
    
    request("http://www.google.com", (error, response, body) => {
     console.log("error:", error);
     console.log("statusCode:", response && response.statusCode);
     console.log("body:", body);
    });
    response.send({"message": faker.internet.userName()});
}