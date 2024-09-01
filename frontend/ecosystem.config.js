require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  apps: [{
    name: "frontend-app"
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF, 
      repo: 'https://github.com/ivanfonin/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'pre-deploy': `scp .env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': `cd frontend && npm i && npm run build && mv ./build/* ${DEPLOY_PATH}/mesto-frontend`,
    }
  }
}
