import pg, { QueryArrayConfig } from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'root',
    port: 5432,
    password: '12345',
    database: 'rankedvideos'
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
