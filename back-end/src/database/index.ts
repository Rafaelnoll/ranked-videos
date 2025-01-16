import pg, { QueryArrayConfig } from 'pg';

const client = new pg.Client({
    host: process.env.PG_HOST || 'localhost',
    user: process.env.PG_USER || 'root',
    port: (process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432),
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE || 'rankedvideos'
});

client.connect()
    .then(() => console.log('Connected to database'))
    .catch(error => console.error(error))

export async function query(query: QueryArrayConfig<any> | string, values?: any) {
    try {
      const { rows } = await client.query(query, values);
      return rows;
    } catch(error){
      console.error(error);
      return [];
    }
}
