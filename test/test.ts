import moonrakerData from './configs/moonraker.json';
import { KlipperConfig } from '../src';
const fs = require('fs');
const path = require('path');

// Helper function to read .cfg files
const readCfgFile = (fileName: string): string => {
    const filePath = path.join(__dirname, 'configs', fileName); // Path to the config file
    return fs.readFileSync(filePath, 'utf-8');  // Read the file content
};

describe('Conversions', () => {
    let klipperConfig: KlipperConfig;

    it('Should convert Moonraker JSON to TS', () => {
        klipperConfig = KlipperConfig.fromJSON(moonrakerData);
        expect(klipperConfig).toBeTruthy();
    });

    it('Should convert a printer.cfg to Klipper configuration', () => {
        const sourceCfgContent = readCfgFile('voron-2.4.cfg');
        klipperConfig = KlipperConfig.fromCfg(sourceCfgContent);
        expect(klipperConfig).toBeTruthy();

        const destinationCfgContent = klipperConfig.toCfg();
        expect(destinationCfgContent).toBeTruthy();
        const goodPath = './test/output/printer.cfg';
        fs.writeFileSync(goodPath, destinationCfgContent);
    });
});
