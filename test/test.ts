import configData from './samle.json';
import { KlipperConfig, klipperFromJson } from '../src';
const fs = require('fs');

describe('Conversions', () => {
    let klipperTs: KlipperConfig;

    it('should convert JSON to TS', () => {
        klipperTs = klipperFromJson(configData);
        expect(klipperTs).toBeTruthy();
    });

    it('should convert model to klipper configuration', () => {
        const klipperCfg = klipperTs.toCfg();
        expect(klipperCfg).toBeTruthy();

        const goodPath = './test/printer.cfg';
        fs.writeFileSync(goodPath, klipperCfg);
        console.log(`Generated: ${goodPath}`);

        if (klipperTs.unknownComponents && klipperTs.unknownComponents.length > 0) {
            const badPath = './test/unkown.cfg';
            const badContent = klipperTs.unknownComponents
                .map(c => `${c.configKey}`)
                .join('\n');
            ;
            fs.writeFileSync(badPath, badContent);
            console.log(`Generated: ${badPath}`);
        }
    });
});
