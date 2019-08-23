const fs = require('fs');
const path = require('path');
const util = require('util');

const signUpController = (request, response) => {
  if (request.method === 'POST') {
    let body = '';
    const pathUsers = path.resolve('src/db/users/');

    const makePath = data => {
      const username = JSON.parse(data).username.toLowerCase();
      const src = `${pathUsers}/${username}.json`;
      return src;
    };

    const writeFile = util.promisify(fs.writeFile);

    const saveUser = data => {
      const src = makePath(data);
      // returning promise
      return writeFile(src, data);
    };

    const sendResponse = () => {
      const src = makePath(body);
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      fs.readFile(src, (err, data) => {
        if (err) console.log(err);
        const resData = `{
					status: "success",
					user: ${data}
				}`;
        response.end(resData);
      });
    };

    const createUserAndSendResponse = () => {
      saveUser(body)
        .then(sendResponse)
        .catch(console.log);
    };

    request
      .on('data', function(data) {
        body += data;
      })
      .on('end', createUserAndSendResponse);
  }
};
module.exports = signUpController;
