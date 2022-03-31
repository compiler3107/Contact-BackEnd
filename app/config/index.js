const config = {
    app: {
        port: process.env.port || 8080,
    },
    db:{
        uri: process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.r5ss6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
}
module.exports = config;