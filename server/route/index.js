module.exports =
  /**
   * @param {import("express-serve-static-core").Application} app
   */
  app => {
    let express = require("express");
    let router = express.Router();
    var fs = require("fs");
    router.get("/loadVideoList", async (req, res) => {


      var dirname = req.query.dirname;
      var path = "D:/下载/Video/";
      if (dirname) {
        path = `${path}${dirname}/`;
      }
      var files = await fs.readdirSync(path, {
        withFileTypes:true
      });

      var video_list = [];

      files.map(v => video_list.push( {
        isDir: v.isDirectory(),name: v.name
      }));

      res.send(video_list);
    });

    router.get("/video", async (req, res) => {

      var name = req.query.name;

     // var buffer = fs.ReadStream(`D:/下载/Video/${name}`);
      res.sendfile(`D:/下载/Video/${name}`)
    })


    app.use("/", router);
  };
