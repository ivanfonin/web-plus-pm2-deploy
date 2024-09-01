require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  apps: [{
    name: "mesto-frontend"
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF, 
      repo: 'https://github.com/ivanfonin/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp ./.env.deploy ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/source/frontend`,
      'post-deploy': `cd ${DEPLOY_PATH}/source/frontend && source /home/${DEPLOY_USER}/.nvm/nvm.sh && npm i && npm run build`,
    }
  }
}
