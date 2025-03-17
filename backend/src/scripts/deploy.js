const { exec } = require('child_process');
const { logger } = require('../utils/logger');

async function deploy() {
  try {
    logger.info('Starting deployment process...');

    // Run pre-deployment checks
    await executeCommand('npm run test');
    
    // Build the application
    await executeCommand('npm run build');
    
    // Run database migrations
    await executeCommand('node src/scripts/setupDatabase.js');
    
    // Deploy backend
    await executeCommand('pm2 start ecosystem.config.js --env production');
    
    logger.info('Deployment completed successfully');
  } catch (error) {
    logger.error('Deployment failed:', error);
    process.exit(1);
  }
}

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        logger.error(`Command failed: ${command}`);
        logger.error(stderr);
        reject(error);
        return;
      }
      logger.info(`Command succeeded: ${command}`);
      logger.info(stdout);
      resolve(stdout);
    });
  });
}

deploy();
