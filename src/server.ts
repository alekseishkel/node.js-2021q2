import { config } from './common/config';
import { app } from './app';
// eslint-disable-next-line node/no-unpublished-import
import { tryDBConnect } from './helpers/db';
import { logError } from './utils/logger';

const startConnection = async () => {
  try {
    await tryDBConnect();
  } catch (err) {
    logError(err);
  }
  app.listen(config.PORT, () =>
    console.log(`App is running on http://localhost:${config.PORT}`),
  );
};
startConnection();
