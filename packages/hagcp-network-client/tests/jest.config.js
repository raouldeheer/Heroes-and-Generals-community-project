/** @type {import("jest").Config} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.json",
        },
    },
};