const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      heightMax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weightMin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weightMax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        defaultValue: "10 - 12",
      },
      breed_group: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bred_for: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://www.agrocalidad.gob.ec/wp-content/uploads/2020/08/perr.jpg",
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // isFromDb: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: true
      // }
    },
    { timestamps: false }
  );
};
