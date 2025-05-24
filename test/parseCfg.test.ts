import { describe, it, expect } from "vitest";
import { KlipperConfig } from '../src'; // Import the KlipperConfig class

const fs = require('fs');
const path = require('path');

// Helper function to read .cfg files
const readCfgFile = (fileName: string): string => {
    const filePath = path.join(__dirname, 'configs', fileName); // Path to the config file
    return fs.readFileSync(filePath, 'utf-8');  // Read the file content
};

describe('CFG conversion', () => {
    it('Should convert a printer.cfg to Klipper configuration', () => {
        const sourceCfgContent = readCfgFile('voron-2.4.cfg');
        const klipperConfig = KlipperConfig.fromCfg(sourceCfgContent);
        expect(klipperConfig).toBeTruthy();

        const destinationCfgContent = klipperConfig.toCfg();
        expect(destinationCfgContent).toBeTruthy();
    });
});