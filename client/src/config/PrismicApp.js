import Prismic from "prismic-javascript";
import { Date, Link, RichText } from "prismic-reactjs";
import PrismicConfig from "./prismic-configuration";

const accessToken = PrismicConfig.accessToken;
const Client = Prismic.client(PrismicConfig.apiEndpoint, { accessToken });

export default Client;
