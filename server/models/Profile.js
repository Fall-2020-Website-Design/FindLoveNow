module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Gender: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['male', 'female']]
            }
        },
        Age: {
            type: DataTypes.INTEGER
        },
        Location: {
            type: DataTypes.STRING,
        },
        Height: {
            type: DataTypes.INTEGER
        },
        Education: {
            type: DataTypes.STRING,
        },
        Hobby: {
            type: DataTypes.STRING,
        },
        Work: {
            type: DataTypes.STRING
        },
        Phrase: {
            type: DataTypes.STRING
        }
    },
        {
            freezeTableName: true,
        });

        Profile.associate = models => {
            Profile.belongsTo(models.User, { foreignKey: "userID" })
        }

    return Profile;
}; 
