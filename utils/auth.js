/*Authorization Code
Prevents a user from viewing information on the site without first logging in, in other words if there is no current session for the user then they will be redirected to the login page.
*/

const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
