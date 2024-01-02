const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, API_KEY} = process.env;
// const API_KEY = '24f204b80e524536a5f21e21b289e559' la primera solucion al apikey, la mas primitiva onga onga uh uh 
console.log(API_KEY)
const videogamesModel = require("./models/videogamesModel");
const genresModel = require("./models/genresModel");
const  platformsModel = require('./models/platformModel') // no voy a generar la tabla platforms
const path = require("path");
const fs = require("fs");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    // dialect: 'postgres', // o tu dialecto correspondiente
    // dialectOptions: {
    //   useUTC: false, // para PostgreSQL
    // },
    // define: {
      timestamps: false,
    //   freezeTableName: true,
    //   underscored: true,
    //   underscoredAll: true,
    // },
    // typeValidation: true, // para validar tipos de datos
    logging: false,
  }
);
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Lectura de modelos y conección a Sequelize
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// modelDefiners.forEach(model => model(sequelize));

// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

 videogamesModel(sequelize);
 genresModel(sequelize);
 platformsModel(sequelize) // a chingar su madre con la tabla models, q no chingue aun (?)

 const {Videogame, Genre, Platform} = sequelize.models
// console.log(sequelize.models)
const videoGamesGenres = sequelize.define("VideoGamesGenres", {});
const videoGamesPlatforms = sequelize.define("VideoGamesPlatforms", {});// a chingar su madre tmb la tabla  VideoGamesPlatformsq intermedia

Videogame.belongsToMany(Genre, { through: videoGamesGenres });
Genre.belongsToMany(Videogame, { through: videoGamesGenres });

Videogame.belongsToMany(Platform, { through: videoGamesPlatforms });
Platform.belongsToMany(Videogame, { through: videoGamesPlatforms });



// console.log(process.env.API_KEY)
// console.log(sequelize.models)


//aca funca el apikey, pq lo mande asignandolo directamente
module.exports = { conn: sequelize,
   ...sequelize.models,
  apikey: process.env.API_KEY,
  testeo : "y si es cuestion de bebuggeo, debuggeo dale un paseo"
  };


  