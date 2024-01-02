const users = require("../model/users");
var jwt = require("jsonwebtoken");



module.exports = {
  requireToken :() => {
    return (req, res, next) => {
      console.log(req.headers);
      try {
        if (
          req.headers["x-access-token"] &&
          req.headers["x-access-token"].length > 0
        ) {
          jwt.verify(
            req.headers["x-access-token"],
            "6ef6051caa1ba975e3658da2f8ac66e9e3819e639197233239b2d86e50a2aabc502b1bd9553ac7edff9efd5f1c9d3ab45892eca04107e8890963649a1edfb103",
            async function (err, decoded) {
              if (err) {
                console.log(err);
                return res.status(401).send({ message: 'unauthorised_access' });
            }
              const userId = decoded?.id;
              console.log(userId,"userId")
            const userDetails = await users.findOne({
                where: {
                  id : userId ,
                },
              }) || {};
              req.userId = userDetails.id;
              next();
            }
          );
        } else {
          return res.status(401).send({ message: 'unauthorised_access' });
        }
      } catch (error) {
        logger.error(error)
        return res.status(401).send({ message: 'unauthorised_access' });
      }
    };
  }
}