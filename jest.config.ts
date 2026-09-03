import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json'
      }
    ]
  },

  transformIgnorePatterns: ['node_modules/(?!react-router)'],

  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts']
};

export default config;
