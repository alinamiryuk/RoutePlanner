const express = require('express');
const useMiddleware = require('./middleware');
const app = express();
const mongoose = require('mongoose');

useMiddleware(app);

const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const routesRouter = require('./routes/routes');



app.use('/', mainRouter);
app.use('/auth', authRouter);
app.use('/routes', routesRouter);

app.listen(3000, () => {
  console.log('3000 port listen');
  mongoose.connect('mongodb://localhost/RoutePlanner', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
});
