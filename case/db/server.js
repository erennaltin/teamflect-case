const csvtojson = require("csvtojson");
const path = require("path");
const fs = require("fs");

const auth = require('json-server-auth')
const jsonServer = require('json-server');

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
    let data = {people: jsonObj, users: []}
    fs.writeFileSync(dbSourceFileJSON, JSON.stringify(data));
  }

  const server = jsonServer.create();
  const router = jsonServer.router(dbSourceFileJSON);
  const middlewares = jsonServer.defaults();
  const rules = auth.rewriter({
    // Permission rules
    users: 600,
    people: 660,
  });
  
  server.use(rules);
  server.use(middlewares);
  server.use(auth);
  server.use(router)
  // ClI do that automatically, but we need to do it manually in module version
  server.db = router.db;
  server.listen(3000, () => {
    console.log('JSON Server is running')
  })
}

start();



