require('./style.css');
require('./modules/jsChecker');

if (ENVIRONMENT === 'production') {
  console.info('Running app in the PRODUCTION environment!');
} else {
  console.info('Running app in the STAGING environment!');
}
