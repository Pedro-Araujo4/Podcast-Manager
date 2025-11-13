import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

const getListEpisodes = async (req : IncomingMessage, res: ServerResponse) => {
    const content = await serviceListEpisodes();

    res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON })
    res.end(
        JSON.stringify(content)
  );
};

const getFilterEpisode = async (req : IncomingMessage, res: ServerResponse) => {
  
  const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON })
    res.end(
        JSON.stringify(content)
  );
}

export {
  getFilterEpisode,
  getListEpisodes
}