import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 200,
        body: [],
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodcast(queryString);

    //verifico o conteudo
    responseFormat.statusCode = data.length !== 0 ? responseFormat.statusCode = StatusCode.OK : responseFormat.statusCode = StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat;
}