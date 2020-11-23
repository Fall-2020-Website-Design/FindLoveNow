module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define("Image", {
    uploadedBy: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'userID'
      }
    },
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB,
    },
  },
   {
    freezeTableName: true,
  });

  return Image;
};