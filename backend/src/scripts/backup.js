const { exec } = require('child_process');
const { logger } = require('../utils/logger');

async function backup() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = `./backups/backup-${timestamp}`;

  try {
    logger.info('Starting backup process...');

    // Create backup directory
    await executeCommand(`mkdir -p ${backupPath}`);

    // Backup database
    await executeCommand(`sqlite3 ./database.sqlite .backup '${backupPath}/database.sqlite'`);

    // Backup configuration
    await executeCommand(`cp .env ${backupPath}/.env`);

    logger.info(`Backup completed: ${backupPath}`);
  } catch (error) {
    logger.error('Backup failed:', error);
    process.exit(1);
  }
}

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
}

backup();
