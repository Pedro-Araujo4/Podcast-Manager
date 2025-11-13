# Podcast Menager

### Description
Um app ao estilo netflix, na qual possa centralizar diferentes episódios de podcasts separados por categoria

### Domain
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões
  - [saúde, bodybuilder, mentalidade, humor, esporte]
- Filtrar episódios por nome de podcast

## How

#### Feature: 
  Listar os episódios de podcasts em sessões

### How to implement:

  GET: retorna lista de episódios

  response:
```js
   [
    {
      podcastName: "flow",
      episode: "CBUM - Flow #319",
      videoId: "pQSuQmUfS30",
      cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
      categories: ["saúde", "esporte", "bodybuilder"]
    },
    {
      podcastName: "flow",
      episode: "MAURICIO MEIRELLES - Flow #342",
      videoId: "1Ymd2mQB_Yk",
      cover: "https://i.ytimg.com/vi/1Ymd2mQB_Yk/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=1Ymd2mQB_Yk",
      categories: ["humor"]
    },
   ]
```

GET: retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast