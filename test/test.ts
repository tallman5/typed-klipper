import configData from './samle.json';
import { KlipperConfig, klipperFromJson } from '../src';
const fs = require('fs');

describe('Conversions', () => {
    let klipperTs: KlipperConfig;

    it('should convert JSON to TS', () => {
        klipperTs = klipperFromJson(configData);
        expect(klipperTs).toBeTruthy();
    });

    it('should convert model to klipper configuration',()=>{
        const klipperCfg = klipperTs.toCfg();
        expect(klipperCfg).toBeTruthy();

        const filePath = './test/printer.cfg';
        fs.writeFileSync(filePath, klipperCfg);
        console.log(`Generated: ${filePath}`);      
    });
});
