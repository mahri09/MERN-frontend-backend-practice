//GET	/api/test/all	retrieve public content
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

//GET	/api/test/user	access User’s content
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

//GET	/api/test/admin	access Admin’s content
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

//GET	/api/test/mod	access Moderator’s content
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};