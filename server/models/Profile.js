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
                isAlpha : true
            }
        },
        Age: {
            type: DataTypes.INTEGER
        },
        Location: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        Interested: {
            type: DataTypes.STRING
        },
        Height: {
            type: DataTypes.INTEGER
        },
        Education: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        Hobby: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        Work: {
            type: DataTypes.STRING
        },
        Phrase: {
            type: DataTypes.STRING
        },
        Picture: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
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
