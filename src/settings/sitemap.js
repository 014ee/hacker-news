const sitemap = {
  home: {
    name: "home",
    path: "/",
    queryKey: "best",
  },
  article: {
    name: "article",
    path: "/article/",
    pathVariable: "/article/:page",
    queryKey: "new",
  },
  ask: {
    name: "ask",
    path: "/ask/",
    pathVariable: "/ask/:page",
    queryKey: "ask",
  },
  show: {
    name: "show",
    path: "/show/",
    pathVariable: "/show/:page",
    queryKey: "show",
  },
  jobs: {
    name: "jobs",
    path: "/jobs/",
    pathVariable: "/jobs/:page",
    queryKey: "job",
  },
  detail: {
    name: "detail",
    path: "/read/",
    pathVariable: "/read/:id",
  },
};

export default sitemap;
