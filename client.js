const net = require("net");

const { IP, PORT } = require("./constants");

const name = "Name: DUC";

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  },
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);

  });

  conn.on('connect', () => {
    console.log("you iz connected");
    conn.write(name);
    //conn.write("Move: up")
  });
  return conn;


};
module.exports = {
  connect
};