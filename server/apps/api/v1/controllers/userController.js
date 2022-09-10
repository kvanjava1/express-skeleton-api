exports.showUsers = (req, res) => {
  return res.json({
    "status" : "ok",
    "data" : [
      {
        "username" : "telo1"
      },
      {
        "username" : "telo2"
      }
    ]
  })
  .status(200);
};

exports.showView = (req, res) => {
  return res.render(
    'api/v1/resources/views/ejs/layout'
  );
}