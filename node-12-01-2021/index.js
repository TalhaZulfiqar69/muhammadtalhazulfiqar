require('dotenv').config();
const fs = require('fs');
const os = require('os');
const path = require('path');

const cup = os.cpus();
const platform = os.platform();
const architecture = os.arch();

const dirName = `${os.homedir()}/Desktop`;

const OsInformation = {
  cup,
  platform,
  architecture,
};

const filPath = path.join(`${dirName}/${process.env.FILE_NAME}`);

const writeOSInformation = () => {
  try {
    // eslint-disable-next-line consistent-return
    fs.access(filPath, (err) => {
      if (err) {
        return new Promise((resolve, reject) => {
          fs.writeFile(
            path.join(`${dirName}/${process.env.FILE_NAME}`),
            `OS information:
        ${JSON.stringify(OsInformation)}.`,
            (writeFileError) => {
              if (writeFileError) {
                reject(writeFileError);
                return;
              }
              resolve(path.join(`${dirName}/${process.env.FILE_NAME}`));
              // eslint-disable-next-line no-console
              console.log('File has been created successfully');
            },
          );
        });
      }
      // eslint-disable-next-line no-console
      console.log('File is aleardy exist');
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

writeOSInformation();
