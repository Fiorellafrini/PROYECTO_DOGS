const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('dog', {
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
  height: {
    type: DataTypes.STRING,
    allowNull: false,
    },

  weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  life_span: {
    type: DataTypes.STRING,
    defaultValue: "10 - 12"

  },
  breed_group: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bred_for: {
    type: DataTypes.STRING,
    allowNull:true
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  origin:{
    type: DataTypes.STRING,
    allowNull:true,
  }

}, {timestamps: false});
};
