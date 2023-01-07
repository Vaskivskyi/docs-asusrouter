import { readdirSync } from "fs";
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export const devices =
//     readdirSync(__dirname).map((file) => {
//         if (file.endsWith(".json")) return require("./" + file);
//     }).filter(item => item !== undefined);

// async function getDevice(device: any) {
//     return await import(device, { assert: { type: "json" } });
// }

export function getFiles() {
    return readdirSync(__dirname).map((file) => {
        if (file.endsWith(".json")) return ("./" + file);
    }).filter(item => item !== undefined);
}

export async function getDevice(device: any) {
    return await import(device, { assert: { type: "json" }});
}

// export async function getDevices() {
//     let devices: object[] = [];

//     let files = getFiles()
    
//     files.forEach(async function(device: any) {
//         let details = await import(device, { assert: { type: "json" }});
//         console.log(details.default);
//         // devices.push(details.default);
//     });

//     console.log(devices)

//     return devices
// }



// export async function getDevices() {
//     devices =  readdirSync(__dirname).map((file) => {
//             if (file.endsWith(".json")) return ("./" + file);
//         }).filter(
//             item => item !== undefined
//         ).map(async function(element) {
//             let details = await getDevice(element);
//             console.log(details);
//             return details;
//         })
// }



// export async function getDevices() {
//     readdirSync(__dirname).map((file) => {
//         if (file.endsWith(".json")) return ("./" + file);
//     }).filter(
//         item => item !== undefined
//     ).forEach(async function(element) {
//         devices.push(await getDevice(element));
//     });
//     return devices;
// }

// export const devices = await getDevices();
