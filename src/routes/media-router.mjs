import express from 'express';
import {
  getMedia,
  getMediaById,
  postMedia,
  putMedia,
  deleteMedia,
} from '../controllers/media-controller.mjs';

const mediaRouter = express.Router();

mediaRouter.route('/').get(getMedia).post(postMedia);

mediaRouter.route('/:id')
  .get(getMediaById)
  .put(putMedia)
  .delete(deleteMedia);

export default mediaRouter;