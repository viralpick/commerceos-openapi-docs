export const pageMap = [{
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "openAPI",
  route: "/openAPI",
  children: [{
    name: "exposure",
    route: "/openAPI/exposure",
    children: [{
      name: "e-promoter",
      route: "/openAPI/exposure/e-promoter",
      frontMatter: {
        "sidebarTitle": "E Promoter"
      }
    }, {
      name: "pr-monitoring",
      route: "/openAPI/exposure/pr-monitoring",
      frontMatter: {
        "sidebarTitle": "Pr Monitoring"
      }
    }, {
      name: "social-posting",
      route: "/openAPI/exposure/social-posting",
      frontMatter: {
        "sidebarTitle": "Social Posting"
      }
    }]
  }, {
    name: "pxm",
    route: "/openAPI/pxm",
    children: [{
      name: "content-scoring",
      route: "/openAPI/pxm/content-scoring",
      frontMatter: {
        "sidebarTitle": "Content Scoring"
      }
    }]
  }]
}];