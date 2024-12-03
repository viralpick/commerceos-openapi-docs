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
  }]
}];