module.exports = (req, res, next) => {
    if (req.method === "POST" && req.path === "/login") {
      console.log("hello");
      if (req.body.username === "jira" && req.body.password === "jira1") {
        return res.status(200).json({
          user: {
            token: "123",
          },
        });
      } else {
        return res.status(400).json({ message: "unknown username or password" });
      }
    }
    next();
  };
  