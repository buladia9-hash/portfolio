import { Client, Databases, ID } from 'https://cdn.jsdelivr.net/npm/appwrite@14.0.1/+esm';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('69984bb70022630d4236');

const databases = new Databases(client);

export { client, databases, ID };
