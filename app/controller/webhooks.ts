const Controller = require('egg').Controller;
import RES_CODE_MAP from '../constants';

class WebHooks extends Controller {
  async onPush() {
    const { ctx } = this;
    ctx.body = {
      code: RES_CODE_MAP.SUCCESS.CODE,
      data: null,
      message: RES_CODE_MAP.SUCCESS.MESSAGE,
    };
  }
}

module.exports = WebHooks;
