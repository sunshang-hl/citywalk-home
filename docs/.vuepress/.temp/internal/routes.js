export const redirects = JSON.parse("{\"/preview/custom-component.example.html\":\"/article/pg9s1ykg/\",\"/preview/markdown.html\":\"/article/3e5v8v8c/\",\"/notes/demo/bar.html\":\"/demo/78x0a95l/\",\"/notes/demo/foo.html\":\"/demo/9is4d80i/\",\"/notes/demo/\":\"/demo/\",\"/en/preview/custom-component.example.html\":\"/en/article/r9y08ik3/\",\"/en/preview/markdown.html\":\"/en/article/7zqoanam/\",\"/en/notes/demo/bar.html\":\"/en/demo/x7bo07tn/\",\"/en/notes/demo/foo.html\":\"/en/demo/d26smeb8/\",\"/en/notes/demo/\":\"/en/demo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "en_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":""} }],
  ["/article/pg9s1ykg/", { loader: () => import(/* webpackChunkName: "article_pg9s1ykg_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/article/pg9s1ykg/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/article/3e5v8v8c/", { loader: () => import(/* webpackChunkName: "article_3e5v8v8c_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/article/3e5v8v8c/index.html.js"), meta: {"title":"Markdown"} }],
  ["/demo/78x0a95l/", { loader: () => import(/* webpackChunkName: "demo_78x0a95l_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/demo/78x0a95l/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/9is4d80i/", { loader: () => import(/* webpackChunkName: "demo_9is4d80i_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/demo/9is4d80i/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/en/article/r9y08ik3/", { loader: () => import(/* webpackChunkName: "en_article_r9y08ik3_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/article/r9y08ik3/index.html.js"), meta: {"title":"Custom Component"} }],
  ["/en/article/7zqoanam/", { loader: () => import(/* webpackChunkName: "en_article_7zqoanam_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/article/7zqoanam/index.html.js"), meta: {"title":"Markdown"} }],
  ["/en/demo/x7bo07tn/", { loader: () => import(/* webpackChunkName: "en_demo_x7bo07tn_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/demo/x7bo07tn/index.html.js"), meta: {"title":"bar"} }],
  ["/en/demo/d26smeb8/", { loader: () => import(/* webpackChunkName: "en_demo_d26smeb8_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/demo/d26smeb8/index.html.js"), meta: {"title":"foo"} }],
  ["/en/demo/", { loader: () => import(/* webpackChunkName: "en_demo_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/en/blog/", { loader: () => import(/* webpackChunkName: "en_blog_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/en/blog/tags/", { loader: () => import(/* webpackChunkName: "en_blog_tags_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/blog/tags/index.html.js"), meta: {"title":"Tags"} }],
  ["/en/blog/archives/", { loader: () => import(/* webpackChunkName: "en_blog_archives_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/blog/archives/index.html.js"), meta: {"title":"Archives"} }],
  ["/en/blog/categories/", { loader: () => import(/* webpackChunkName: "en_blog_categories_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/en/blog/categories/index.html.js"), meta: {"title":"Categories"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/Project/multi-site-plume/packages/home/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);