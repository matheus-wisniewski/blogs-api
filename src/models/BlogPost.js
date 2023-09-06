const { fn } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      field: "user_id",
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      },
      type: DataTypes.INTEGER,
    },
    published: {
      allowNull: true,
      defaultValue: fn('now'),
      type: DataTypes.DATE,
    },
    updated: {
      allowNull: true,
      defaultValue: fn('now'),
      type: DataTypes.DATE,
    }
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true
  });

  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  }

  return BlogPostModel;
};