import fs from 'fs';
import path from 'path';

const ENV = process.env.TEST_ENV?.toLowerCase() || 'dev';

const envFilePath = path.join(__dirname, 'env', `${ENV}.json`);

if (!fs.existsSync(envFilePath)) {
  throw new Error(
    `❌ Environment file not found: ${ENV}.json`
  );
}

export const envConfig = JSON.parse(
  fs.readFileSync(envFilePath, 'utf-8')
);

console.log(`🌍 Running tests in '${ENV}' environment`);
