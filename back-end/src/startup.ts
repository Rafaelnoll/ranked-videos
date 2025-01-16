// Will run when start the application

import fs from 'fs';
const dir = './uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
