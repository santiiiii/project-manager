import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class ES6 {

    constructor (commander) {}

    execute (commander) {
        let name = typeof commander.name != 'function' ? commander.name : `es6-project`;

        if (fs.existsSync(commander.name)){
            console.warn(`Folder ${name} already exists. Specify a different name.`)
            process.exit();
        }

        //Create project folder
        fs.mkdirSync(`./${name}`);

        execSync(`cp -r ${path.resolve(__dirname)}/projects/es6/* ./${name}/`);
        execSync(`npm install --prefix ./${name}/`);

        console.log ("");
        console.log ('\x1b[32m%s\x1b[0m', `    Project ${name} already configured`);
        console.log ("");
        console.log ('\x1b[34m%s\x1b[0m', '        Get started with: npm start');
        console.log ("");
    }

}

export default ES6