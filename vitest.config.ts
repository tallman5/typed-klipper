import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // Enables global `describe`, `test`, etc.
        environment: 'node', // Ensures Node.js environment
        coverage: {
            provider: 'v8', // Uses V8 coverage (faster than Istanbul)
            reporter: ['text', 'json', 'html'],
        },
        include: ['test/**/*.test.ts'], // Matches test files
    },
});