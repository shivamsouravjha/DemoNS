import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import Config from './config/config';
import Routes from './routes/imageApi';
// Config();
const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use('/api/images', [cors()]);
app.use('/api/images', Routes);

app.listen(process.env.PORT || 5000);