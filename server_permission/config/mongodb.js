const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017'

let PermissionsDatabase = null

async function connect() {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    await client.connect()
    const PermissionDb = await client.db('Permissions')
    PermissionsDatabase = PermissionDb
    return PermissionDb
  } catch (error) {
    console.log(error)
  }
}

function getPermissionsDatabase () {
  return PermissionsDatabase
}

module.exports = {
  connect,
  getPermissionsDatabase,
}