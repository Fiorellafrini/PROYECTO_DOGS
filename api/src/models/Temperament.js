const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperament', {
    // id: {
    //   type:DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   // type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });
};
