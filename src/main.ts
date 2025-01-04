import { app } from './app';
import { dataSource } from './infrastructure/datasource/datasource';

const PORT = 3000;

app.listen(PORT, () => {
  dataSource
    .initialize()
    .then(() => console.log('Database connected'))
    .catch(console.error);
  console.log(`App listening on port ${PORT}`);
});
