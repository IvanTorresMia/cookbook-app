

module.exports = function(sequelize, DataTypes) {
    var Reciepie = sequelize.define("Recipie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 20]
        }
      }

    })

    Recipie.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        models.Reciepie.hasMany(models.Ingridients, {
          onDelete: "cascade"
        });
      };
      return Reciepie;
}
