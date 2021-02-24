export default {
  apiEndpoint: "https://ContentRepo.prismic.io/api/v2",

  linkResolver(doc) {
    if (doc.type === "post") return `/blog/${doc.uid}`;
    return "/";
  }
};
