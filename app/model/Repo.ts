module.exports = app => {
  const { STRING, INTEGER, BOOLEAN, DATE } = app.Sequelize;

  const RepoItem = app.model.define('repo_item',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      node_id: STRING(30),
      name: STRING(30),
      full_name: STRING(30),
      private: BOOLEAN,
      git_url: STRING,
      ssh_url: STRING,
      clone_url: STRING,
      url: STRING,
      created_at: DATE,
      updated_at: DATE,
    },
    {
      timestamps: true,
    },
  );

  return RepoItem;
};
