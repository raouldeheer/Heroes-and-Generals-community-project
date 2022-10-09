import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.m?ts$": [
            "ts-jest",
            {
                tsconfig: "./tsconfig.json",
            },
        ],
    },
};

export default jestConfig;
