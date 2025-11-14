import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const defaultContent = { "Content-Type": ContentType.JSON }

const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {
  
    const content = await serviceListEpisodes();

    res.writeHead(content.statusCode, defaultContent)
    res.write(JSON.stringify(content.body))
    res.end();
};

const getFilterEpisode = async (req : IncomingMessage, res: ServerResponse) => {
  
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, defaultContent)
    res.write(JSON.stringify(content.body))
    res.end();
}

export {
  getFilterEpisode,
  getListEpisodes
}