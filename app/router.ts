import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/init', controller.repo.getRepoListFromDB);
  router.get('/webhook/push', controller.webhooks.onPush);
  router.get('/repo/list/update', controller.repo.updateList);
};
