const { MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017'

let UsersDatabase = null

async function connect() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    await client.connect()
    const UserDb = await client.db('Users')
    UsersDatabase = UserDb
    return UserDb
  } catch (error) {
    console.log(error)
  }
}

function getUsersDatabase () {
  return UsersDatabase
}

module.exports = {
  connect,
  getUsersDatabase,
}
