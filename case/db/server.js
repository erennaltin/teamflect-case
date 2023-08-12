const csvtojson = require("csvtojson");
const path = require("path");
const fs = require("fs");

const dbSourceFileCSV = path.join(__dirname, "data", "source", "people-10000.csv");
let dbSourceFileJSON = path.join(__dirname, "data", "source", "db.json");

const start = async () => {
  if (!fs.existsSync(dbSourceFileJSON)) {
    const csvResponse = await csvtojson()
      .fromFile(dbSourceFileCSV)
  
    const jsonObj = csvResponse.map(item => (
        {
          id: parseInt(item["Index"]),
          userId: item["User Id"],
          firstName: item["First Name"],
          lastName: item["Last Name"],
          sex: item["Sex"],
          email: item["Email"],
          phone: item["Phone"],
          dateOfBirth: item["Date of birth"],
          jobTitle: item["Job Title"],
        })
        )
    let data = {people: jsonObj}
    fs.writeFileSync(dbSourceFileJSON, JSON.stringify(data));
  }

  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const router = jsonServer.router(dbSourceFileJSON);
  const middlewares = jsonServer.defaults();

  server.use(middlewares)
  server.use(router)
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })
}

start();



