module.exports = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'categories',
    timestamps: false,
    underscored: true
  });

  return CategoryModel;
};