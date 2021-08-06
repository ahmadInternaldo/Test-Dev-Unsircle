const express = require("express");
const app = express();
const axios = require("axios");
const { ApolloServer, gql } = require("apollo-server");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const typeDefs = gql`
	type User {
		_id: ID
		email: String
		password: String
	}
	type deletePermission {
		msg: String
	}
	type findBarang {
		_id: ID
    name: String
    image: String
    description: String
	}
	type findUser {
		_id: ID
		email: String
		password: String
	}
  type Barang {
    _id: ID
    name: String
    image: String
    description: String
  }
	type Permission {
		_id: ID
		UserId: Integer
		BarangId: Integer
    count: Integer
	}
	type Mutation {
		addUser(email: String, password: String): User
    findUser(_id: ID): findUser
		addPermission(UserId: Integer, BarangId: Integer, count: Integer): Permission
		editPermission(_id: ID, count: Integer): Permission
		deletePermission(_id: ID): deletePermission
		
		findPermission(_id: ID): findPermission
	}
	type Query {
		Users: [User]
		Permissions: [Permission]
	}
`;
const resolvers = {
	Query: {
		Users: () => {
			return axios({
				url: "http://localhost:4001/",
				method: "get",
			}).then((respons) => {
				return respons.data;
			});
		},
		Barangs: () => {
			return axios({
				url: "http://localhost:4003/",
				method: "get",
			}).then((respons) => {
				return respons.data;
			});
		},
	},
	Mutation: {
		addUser: (_, args) => {
			return axios({
				url: "http://localhost:4001/",
				method: "post",
				data: {
					email: args.email,
					password: args.password
        },
			}).then((respons) => {
				return respons.data;
			});
		},
    findUser: (_, args) => {
			return axios({
				url: `http://localhost:4001/${args._id}`,
				method: "get",
			}).then((respons) => {
				return respons.data;
			});
		},
		addPermission: (_, args) => {
			console.log("masuk");
			return axios({
				url: "http://localhost:4002/",
				method: "post",
				data: {
					BarangId: args.BarangId,
					UserId: args.UserId,
					count: args.count,
				},
			}).then((respons) => {
				console.log(respons.data);
				return respons.data;
			});
		},
		editPermission: (_, args) => {
			return axios({
				url: `http://localhost:4002/${args._id}`,
				method: "patch",
				data: {
					count: args.count
				},
			}).then((respons) => {
				return respons.data;
			});
		},
		deletePermission: (_, args) => {
			return axios({
				url: `http://localhost:4002/${args._id}`,
				method: "delete",
			}).then((respons) => {
				return respons.data;
			});
		},
		findBarang: (_, args) => {
			return axios({
				url: `http://localhost:4003/${args._id}`,
				method: "get",
			}).then((respons) => {
				return respons.data;
			});
		},

	},
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
