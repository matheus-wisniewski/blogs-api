module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'post_id',
      references: {
        key: 'id',
        model: 'blog_posts',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: "category_id",
      references: {
        key: 'id',
        model: 'categories',
      },
    }
  },
  {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'post_id', otherKey: 'category_id', as: 'categories'});
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'post_id', otherKey: 'category_id'});
  };

  return PostCategory;
};