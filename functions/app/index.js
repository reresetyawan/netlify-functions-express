/** Express App */
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import compression from 'compression'

export default function expressApp() {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  /** define routes */
  router.get('/coba', function(req, res) {
    res.send('Coba Route');
  })

  router.get('/hello/', function (req, res) {
    res.send('Hello world');
  })

  app.use('/api', router)
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}
