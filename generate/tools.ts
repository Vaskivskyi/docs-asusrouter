import * as path from "path";
import * as fs from "fs";
import { __dirname, imageBaseDir, imageBaseUrl, imageDefault } from "./const";

export async function fileExists(path: fs.PathLike) {
    return new Promise((resolve, reject) => {
        fs.access(path, fs.constants.F_OK, error => {
            resolve(!error);
        });
    });
}

export async function generatePage(content: any, target: any) {
    target = path.resolve(__dirname, "..", target);
    if (typeof content === "function") {
        content = await content();
    }
    await fs.promises.writeFile(target, content)
}

export async function getImage(model: string) {
    let result = model + ".png"
    if (!await fileExists(path.join(imageBaseDir, result))) {
        result = imageDefault + ".png"
    }
    return imageBaseUrl + "/" + result
}
