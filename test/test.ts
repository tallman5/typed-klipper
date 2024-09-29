import moonrakerData from './configs/moonraker.json';
import { KlipperConfig, klipperFromJson } from '../src';
const fs = require('fs');

describe('Conversions', () => {
    let klipperTs: KlipperConfig;

    it('Should convert Moonraker JSON to TS', () => {
        klipperTs = klipperFromJson(moonrakerData);
        expect(klipperTs).toBeTruthy();
    });

    it('Should convert component to Klipper configuration', () => {
        const klipperCfg = klipperTs.toCfg();
        expect(klipperCfg).toBeTruthy();

        const goodPath = './test/output/printer.cfg';
        fs.writeFileSync(goodPath, klipperCfg);
        console.log(`Generated: ${goodPath}`);

        if (klipperTs.unknownComponents && klipperTs.unknownComponents.length > 0) {
            const badPath = './test/output/unkown.cfg';
            const badContent = klipperTs.unknownComponents
                .map(c => `${c.configKey}`)
                .join('\n');
            ;
            fs.writeFileSync(badPath, badContent);
            console.log(`Generated: ${badPath}`);
        }
    });
});
