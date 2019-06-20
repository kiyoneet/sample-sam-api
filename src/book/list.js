const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()
exports.handler = async (event) => {

    const params = {
        TableName: 'books',
    }
    const results = await documentClient.scan(params)

    return {
        statusCode: 200,
        books: results.items
    }
}