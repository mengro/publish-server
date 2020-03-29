const Service = require('egg').Service;

class GitRepos extends Service {
  async queryListFromGitHub() {
    const res = await this.ctx.curl('https://api.github.com/users/mengro/repos',
      {
        dataType: 'json',
        timeout: 30000,
      },
    );
    return res;
  }
  async queryListFromDB() {
    const repoList = await this.app.model.Repo.findAll({
      attributes: [ 'name', 'id' ],
    });
    return repoList;
  }
}

module.exports = GitRepos;
