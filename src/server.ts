import mongoose from 'mongoose';
import app from './app';
import env from './common/setEnv';

const port = env.PORT;

mongoose
  .connect(env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log('Connection established successfully 🥳');
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch(console.error);
