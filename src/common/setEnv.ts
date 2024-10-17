import { cleanEnv, port, str } from 'envalid';

export default cleanEnv(process.env, {
  PORT: port(),
  DATABASE: str(),
});
