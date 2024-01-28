

  const fs = require('fs');
  const { exec } = require('child_process');
  
  // Read the list
  const list = JSON.parse(fs.readFileSync('compileList.json', 'utf-8'));
  
  // Iterate over each item and execute the sass command
  list.forEach(item => {
      const command = `sass "${item.input}":"${item.output}"`;
      exec(command, (error, stdout, stderr) => {
          if (error) {
              console.error(`Error executing: ${command}\n`, error);
          } else if (stderr) {
              console.error(`Sass Error: ${stderr}`);
          } else {
              console.log(`Compiled: ${item.input} to ${item.output}`);
          }
      });
  });

