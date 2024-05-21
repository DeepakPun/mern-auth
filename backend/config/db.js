import mongoose from 'mongoose'

const connectDB = async () => {
  const mongodbUri =
    process.env.NODE_ENV === 'development'
      ? process.env.MONGO_DEV_URI
      : process.env.MONGO_PROD_URI

  console.log(process.env.NODE_ENV)
  console.log(mongodbUri)

  try {
    const conn = await mongoose.connect(mongodbUri)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
