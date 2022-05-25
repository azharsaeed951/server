const { Video } = require("../models");

async function getAllVideos(req, res) {
  try {
    const videos = await Video.findAll();
    const response = {};
    response.data = videos;
    response.code = 200;
    response.message = "success";
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
}

async function addVideo(req, res) {
  try {
    const {
      video,
      description,
      privacy_type,
      duet_video_id,
      old_video_id,
      duration,
    } = req.body;

    const videoItem = await Video.create({
      video,
      duet_video_id,
      old_video_id,
      description,
      privacy_type,
      duration,
      created: new Date(),
    });

    res.send(videoItem);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  getAllVideos,
  addVideo,
};
