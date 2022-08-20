exports.showUsers = (req, res) => {
  let data = {
    "status" : "ok",
    "data" : [
      {
        "username" : "telo1"
      },
      {
        "username" : "telo2"
      }
    ]
  };

  return res.json(data)
            .status(200);
};

exports.showView = (req, res) => {
  console.log(__dirname);
  return res.render('api/v1/resources/views/ejs/layout')
}