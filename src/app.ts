import * as http from 'http';
  
import { getFilterEpisode, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { httpMethods } from './utils/http-methods';
  

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const [ baseUrl, queryString ] = req.url?.split("?") ?? ["", ""];

    if (req.method === httpMethods.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    } 
  
    if (req.method === httpMethods.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisode(req, res);
    }
};