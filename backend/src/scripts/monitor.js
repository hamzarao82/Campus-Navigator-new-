const { logger } = require('../utils/logger');
const os = require('os');

function monitorSystem() {
  const memoryUsage = process.memoryUsage();
  const cpuUsage = os.loadavg();
  
  logger.info('System Monitoring Report:');
  logger.info(`Memory Usage: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
  logger.info(`CPU Load (1m, 5m, 15m): ${cpuUsage.join(', ')}`);
  logger.info(`Uptime: ${Math.round(process.uptime())} seconds`);
}

// Monitor every 5 minutes
setInterval(monitorSystem, 300000);
monitorSystem();
