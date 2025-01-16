import { Request, Response } from "express";
import VideosRepository from "../repositories/VideosRepository";

class VideoController {
  async index(request: Request, response: Response){
    const videos = await VideosRepository.findAll();
    response.status(200).json({ videos });
  }

  async store(request: Request, response: Response){

    const file = request.file;
    const userId = request.userId as string;

    if(!file){
      return response.status(400).json({ error: 'video is required' });
    }

    const {
      title = file.originalname
    } = request.body;

    if(!title){
      return response.status(400).json({ error: 'title is required' });
    }

    const videoUploaded = await VideosRepository.create({ title, votes: 0, uploaded_by: userId, path: file.path })

    if(videoUploaded){
      return response.status(200).json({ message: 'Video Successfully Uploaded', video: videoUploaded })
    }

    return response.status(500).json({ error: 'Error when uploading video.' })
  }
}

export default new VideoController();
