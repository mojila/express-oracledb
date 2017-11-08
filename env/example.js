var oracledb = require('oracledb');

var config = {
  user: 'hr',
  password: 'hr',
  connectString: 'localhost/xe'
};

var conn = oracledb.getConnection(config);

var query = conn.then((connection) => {
  return connection.execute(
    "SELECT department_id, department_name " +
    "FROM departments " +
    "WHERE department_id = :did",
    [180]
  );
});

var result = query.then((result) => {
  console.log(result.rows);
});