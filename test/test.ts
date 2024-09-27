import configData from './samle.json';
import { KlipperConfig, klipperFromJson } from '../src';

describe('Conversions', () => {
    let klipperTs: KlipperConfig;

    it('should convert JSON to TS', () => {
        klipperTs = klipperFromJson(configData);
        expect(klipperTs).toBeTruthy();
    });

    it('should convert model to klipper configuration',()=>{
        const klipperCfg = klipperTs.toCfg();
        console.log(klipperCfg);
        expect(klipperCfg).toBeTruthy();
    });
});
