const AWS = require('aws-sdk')
const documentClient = new AWS.DynamoDB.DocumentClient()


exports.handler = async (event) => {

    const params = {
        TableName: 'books',
        Item: {
            isbn: event.body.isbn,
            isHad: event.body.is_had
        }
    }
    const results = await documentClient.put(params)

    return {
        statusCode: 200
    }
}