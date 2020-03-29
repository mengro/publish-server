const Controller = require('egg').Controller;
import RES_CODE_MAP from '../constants';

class Init extends Controller {
  async getRepoListFromDB() {
    const { ctx } = this;
    const repoList = await this.service.repo.queryListFromDB();
    if (Array.isArray(repoList)) {
      ctx.body = {
        code: RES_CODE_MAP.SUCCESS.CODE,
        data: repoList,
        message: RES_CODE_MAP.SUCCESS.MESSAGE,
      };
    }
  }
  async updateList() {
    const { ctx, app } = this;
    app.runSchedule('update_repoList');
    ctx.body = {
      code: RES_CODE_MAP.SUCCESS.CODE,
      message: RES_CODE_MAP.SUCCESS.MESSAGE,
    };
  }
}

module.exports = Init;
