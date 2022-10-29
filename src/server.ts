import app from './app';
import config from './config';
import { sequelize } from './database';

export async function runServer() {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(config.portServer, () => {
      console.log(`server listening on ${config.hostServer}:${config.portServer}`);
      console.log('kill server press ctrl + c');
    });
  } catch (error) {
    console.error(error);
  }
}

runServer();

process.on('uncaughtException', (error) => {
  console.error('uncaugth exception: ', error);
});
