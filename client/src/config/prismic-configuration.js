export default {
  apiEndpoint: "https://ContentRepo.prismic.io/api/v2",

  linkResolver(doc) {
    console.log(doc);
    debugger;
    if (doc.type === "post") return `/blog/${doc.uid}`;
    return "/";
  }
};
