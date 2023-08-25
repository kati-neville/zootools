import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  testEnvironment: "jest-environment-jsdom",
};
export default createJestConfig(config);
