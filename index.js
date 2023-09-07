const express = require("express");
require("./conn");
const studentmodel = require("./Schema/model");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.post("/registers", async (req, res) => {
  try {
    const studentdata = new studentmodel(req.body);
    const userdata = await studentdata.save();
    res.status(200).send(userdata);
    console.log(userdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/viewusers", async (req, res) => {
  try {
    const viewusers = await studentmodel.find();
    res.status(200).send(viewusers);
    console.log(viewusers);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch("/updatedata/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateuserid = await studentmodel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateuserid);
    console.log(updateuserid);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateuserid = await studentmodel.findByIdAndDelete(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateuserid);
    console.log(updateuserid);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () => {
  console.log("your server is runing");
});
