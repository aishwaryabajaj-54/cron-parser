const cronExpression = process.argv[2];
const { cronController } = require('./app/controllers');

if (!cronExpression) {
    console.error('Please provide a cron string as a command line argument.');
} else {
    cronController(cronExpression);
}