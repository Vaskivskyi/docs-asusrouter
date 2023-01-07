// import { domain } from "../vuepress.config";
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const domain = "https://asusrouter.vaskivskyi.com/"

export const deviceBaseDir = path.resolve(__dirname, "..", "docs", "devices");
export const imageBaseDir = path.resolve(__dirname, "..", "public", "devices");
export const imageBaseUrl = domain + "devices";
export const imageDefault = "no-image"
