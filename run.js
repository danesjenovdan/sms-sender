const csv = require('csv-parser');
const fs = require('fs');
const shell = require('shelljs');
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv( {separator: ','}))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  
  	results.forEach(async (result) => {

  		return new Promise((resolve, reject) => {

  			shell.env['NUMBER'] = result.phone;
  			shell.env['CONTENT'] = "'"+result.SMS+"'";

  			shell.exec(`${__dirname}/send2.sh`);

  			resolve();

  	// 		const exec = require('child_process').exec;
			// const myShellScript = exec(`${__dirname}/NUMBER="${result.NUMBER}" CONTENT="'${result.CONTENT}'" send2.sh`);
			// myShellScript.stdout.on('data', (data)=>{
			//     console.log(data); 
			//     resolve();
			// });
			// myShellScript.stderr.on('data', (data)=>{
			//     console.error(data);
			// });

  		});


  	});

  });