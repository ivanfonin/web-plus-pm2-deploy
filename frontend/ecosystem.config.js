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
      'pre-deploy': 'echo "Starting SCP..."; echo $PWD; ls -la /Users/gao/Codex/javascript/yandex-practicum/web-plus/15/web-plus-pm2-deploy/frontend; scp /Users/gao/Codex/javascript/yandex-practicum/web-plus/15/web-plus-pm2-deploy/frontend/.env.deploy ivanfonin@51.250.20.122:/home/ivanfonin/src; echo "SCP finished"',
      'post-deploy': `cd frontend && npm i && npm run build && mv ./build/* ${DEPLOY_PATH}/mesto-frontend`,
    }
  }
}
