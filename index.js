#!/usr/bin/env node

var program = require('commander');
var process1 = require('child_process');
//version 版本号
//name 新项目名称
program.version('1.0.0', '-v, --version')
    .command('init <template> <project>')
    .action((template, project) => {
        console.log(`clone ${template} template ...` );
        setTimeout(() => {
            console.error('Download Overtime! Please check network then try again! ^_^');
            process.exit();
        }, 20000)
        process1.exec(`git clone git@github.com:Excalibur0w0/burry-template-${template}.git`, (error, stdout, stderr) => {
            if (error !== null) {
                console.log('exec error: ' + error);
                return;
            }
            console.log(stdout);
            console.log('clone success');
            process1.exec(`mv burry-template-${template} ${project}`, (error, stdout, stderr) => {
                console.log("Completed! Thanks for download Excalibur0w0 cli!");
                process.exit();
            })
        });
    })
program.command('ls')
    .action(() => {
        let templates = ['vue', 'vue-ssr']
        templates.forEach(template => console.log(template));
    });
program.parse(process.argv);