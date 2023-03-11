const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('dog', {
  id: {
    type: DataTypes.UUID,
    allowNull: true, //DEYSE PUSO FALSE
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  min_height: {
    type: DataTypes.STRING,
    allowNull: false
  },
  max_height: {
    type: DataTypes.STRING,
    allowNull: false
  },
  min_weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  max_weight: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // height: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   },

  //   weight: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  life_span: {
    type: DataTypes.STRING,
    allowNull: true
  },
  breed_group: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bred_for: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  origin:{
    type: DataTypes.STRING,
    allowNull:true,
  }
  // createInDb: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true,
  // }
}, {timestamps: false});
};
