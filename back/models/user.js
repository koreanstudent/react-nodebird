module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {  //테이블명 users
        nickname: {
            type: DataTypes.STRING(20),  // 20글자 이하
            allowNull: false, // 필수
        },
        userId: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,  // 고유한 값
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci' // 한글이 저장됨
    });

    User.associate = (db) => {
        db.User.hasMany(db.Post, { as : 'Posts' }); // as (별칭)자바스크립트에서 사용할수 잇다
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' }); // as는 자바스크립트에서 사용할 객체명 foreignkey는 디비에서 사용할 컬럼명
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
    };

    return User;
};