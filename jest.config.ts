import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/types/(.*)': '<rootDir>/types/$1',
    '@/styles/(.*)': '<rootDir>/styles/$1',
    '@/utils/(.*)': '<rootDir>/utils/$1',
    '@/server/(.*)': '<rootDir>/server/$1',
    '@/lib/(.*)': '<rootDir>/lib/$1',
    '@/controllers/(.*)': '<rootDir>/lib/controllers/$1',
    '@/api/(.*)': '<rootDir>/app/api/$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
