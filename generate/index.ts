import throat from "throat";
import { getDevice, getFiles } from './devices/index';
import { generateDevice, generateDeviceList, generateDevicesPage } from "./generate";

const files = getFiles();

let devices: any[] = []

for (const file of files) {
    const details = await getDevice(file);
    devices.push(details.default);
}

async function generateDevices() {
    const genDevThrottled = throat(20, device => generateDevice(device));
    await Promise.all(devices.map(genDevThrottled));
}

( async function () {
    await Promise.all([
      generateDevices(),
      generateDeviceList(devices),
      generateDevicesPage(devices),
    ]);
    console.log('Done');
  } )();
