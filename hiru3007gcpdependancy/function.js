let faker = require("faker");
exports.handler = function(request, response) {
    
    response.send({"message": faker.internet.userName()});
}