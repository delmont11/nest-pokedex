export const EnvConfiguration = () => {
    return {
        ENV: process.env.NODE_ENV || 'dev',
        PORT: process.env.PORT || 3000,
        MONGO_DB: process.env.MONGO_DB || 'mongodb://localhost:27017/nest-pokemon',
    }
}