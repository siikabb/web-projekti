import {addMedia, findMediaById, listAllMedia} from "../models/media-model.mjs";

const getMedia = async (req, res) => {
  const mediaData = await listAllMedia();
  res.json(mediaData);
};

const postMedia = (req, res) => {
  const {filename} = req.body;
  if (filename) {
    addMedia(req.body);
    res.status(201);
    res.json({message: 'New media item added.'})
  } else {
    res.sendStatus(400);  
  }
};

const getMediaById = async (req, res) => {
  const media = await findMediaById(req.params.id);
  if (media) {
    res.json(media);
  } else {
    res.sendStatus(404, 'Media not found.');
  }
};


const putMedia = async (req, res) => {
  const id = await findMediaById(req.params.id);
  if (me) {
    res.json(media);
  } else {
    res.sendStatus(404, 'Media not found.');
  }
};

const deleteMedia = (req, res) => {
  // not implemented in this example, this was homework
  res.sendStatus(200);
};

export {getMedia, getMediaById, postMedia, putMedia, deleteMedia};