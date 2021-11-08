module.exports = {
    name: "client",
    displayName: "client",
    rootDir: "./",
    testEnvironment: "jsdom",
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.json",
            diagnostics: {
                ignoreCodes: [151001]
            }
        }
    },
    preset: "ts-jest/presets/js-with-ts",
    testMatch: [
        "<rootDir>/src/**/*.spec.(ts|tsx|js)"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "/src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/"
    ],
    coverageReporters: [
        "text", "html"
    ]
};
