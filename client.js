const net = require("net");

const name = "Name: DUC"

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541"
  },
  );

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)

  })

  conn.on('connect', () => {
    console.log("you iz connected")
    conn.write(name)
    //conn.write("Move: up")
  })
  return conn;


};
module.exports = {
  net,
  connect 
};