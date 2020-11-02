module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        age: {
            type: DataTypes.INTEGER
        },
        location: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        height: {
            type: DataTypes.INTEGER
        },
        education: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        bio: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        ethnicity: {
            type: DataTypes.STRING,
            validate: {
                isAlpha : true
            }
        },
        picture: {
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