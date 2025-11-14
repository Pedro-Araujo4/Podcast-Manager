# Podcast Manager 🎧

Um aplicativo estilo Netflix para centralizar diferentes episódios de podcasts organizados por categorias.

## 📋 Descrição

O Podcast Manager é uma aplicação web que permite explorar episódios de podcasts organizados em sessões temáticas, semelhante à experiência do Netflix. Foca em podcasts em vídeo com filtros para facilitar a descoberta de conteúdo.

## 🚀 Funcionalidades

- **Listagem por Categorias**: Saúde, Bodybuilder, Mentalidade, Humor, Esporte
- **Filtro de Podcasts**: Busca por nome do podcast
- **API RESTful**: Endpoints para integração

## 🛠️ Tecnologias

- Node.js com TypeScript
- HTTP nativo do Node.js
- Arquitetura modular com controllers e routes

## Filtrar Episódios por Podcast

GET /api/podcasts/episode?podcast=flow

## 💻 Código

### app.ts

```typescript
import * as http from 'http';
import { getFilterEpisode, getListEpisodes } from './controllers/podcasts-controller';
import { Routes } from './routes/routes';
import { httpMethods } from './utils/http-methods';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
    const baseUrl = req.url?.split("?")[0];

    if (req.method === httpMethods.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(req, res);
    } 

    if (req.method === httpMethods.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisode(req, res);
    }
};
```

### Estrutura de Dados

```typescript
interface PodcastEpisode {
    podcastName: string;
    episode: string;
    videoId: string;
    cover: string;
    link: string;
    categories: string[];
}
``` 

### Exemplo de Response

```typescript
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "MAURICIO MEIRELLES - Flow #342",
        "videoId": "1Ymd2mQB_Yk",
        "cover": "https://i.ytimg.com/vi/1Ymd2mQB_Yk/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=1Ymd2mQB_Yk",
        "categories": ["humor"]
    }
]
``` 

# 📦 Instalação

## Clone o repositório
git clone https://github.com/seu-usuario/podcast-manager.git
cd podcast-manager

## Instale as dependências
npm install

## Execute em desenvolvimento
npm run start:dev

### Runtime & Core
- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset tipado do JavaScript

#### 📚 TypeScript Ecosystem
- **`@types/node`** (`^24.10.1`) - Definições de tipos para Node.js
- **`typescript`** (`^5.9.3`) - Linguagem de programação tipada

#### 🔧 Build Tools
- **`tsup`** (`^8.5.0`) - Bundler rápido para TypeScript
- **`tsx`** (`^4.20.6`) - Runtime para executar TypeScript diretamente

## 📄 Licença
Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes completos.
