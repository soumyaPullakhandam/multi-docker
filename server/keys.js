// Environment variables

//variableName = value
// Sets a variable in the container at "run time"

// variableName
// Sets a variable in the container at "run time"
// Value is taken from your computer

module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT
};
