const path = require('path');
const fs = require('fs');

const sourceFile = "C:\\Users\\aarju\\Downloads\\my_stuff\\intellipaat_stuff\\Node_js_assignments\\sample.txt";
const backupFolderPath = "C:\\Users\\aarju\\Downloads\\my_stuff\\intellipaat_stuff\\Node_js_assignments\\backupfolder";

const createBackup = (sourceFile) => {
    fs.readFile(sourceFile, 'utf8', (error, fileContent) => {
      if (error) {
        if (error.code === 'ENOENT') {
          console.log(`File not found: ${filePath}`);
        }
        return;
      }

      const backupFileName = `${Date.now()}_backup.txt`;
      const backupFilePath = path.join(backupFolderPath, backupFileName);
  
      fs.writeFile(backupFilePath, fileContent, 'utf8', (error) => {
        if (error) {
          console.log('An error occurred while creating the backup:', error);
          return;
        }
        console.log('backu created');
      });
    });
};


const watchFileChanges = () => {
    //watchfile is deprecated had to use watch, it is unstable and fires twice which is why two backups
    fs.watch(sourceFile, async (eventType, filename) => {
        try{
            if (eventType === 'change') {
                console.log('file change');
                await createBackup(sourceFile);
            }
        } catch (error) {
            console.log(error);
        }
    });
};

watchFileChanges();
  