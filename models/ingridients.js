

module.exports = function(sequelize, DataTypes) {
var Ingridients = sequelize.define("Ingridients", {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
});
Ingridients.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.Ingridients.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
return Ingridients;
}