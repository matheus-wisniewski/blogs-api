const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });

  return { status: 'SUCCESSFUL', data: allPosts };
};

module.exports = {
  findAll,
};