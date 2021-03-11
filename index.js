#!/usr/bin/env node

const program = require('commander');
const process1 = require('child_process');
//version 版本号
//name 新项目名称
program.version('1.0.0', '-v, --version')
    .command('init <template> <project>')
    .action((template, project) => {
        console.log('clone template ...');
        setTimeout(() => {
            console.log("Download Overtime! Please check network and try again. ^_^");
            process.exit();
        }, 200000)
        // burry-template-vue
        process1.exec(`git clone git@github.com:Excalibur0w0/burry-template-${template}.git`, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('clone success');
            process1.exec(`mv ${template} ${project}`, function(error ,stdout, stderr) {
                console.log('completed！thanks for install excalibur0w0 template！')
                process.exit();
            })
        });
    });
program.parse(process.argv);