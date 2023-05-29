
import * as amqp from "amqplib"

const connect = async () => {
    try
    {
        const connection = await amqp.connect('amqp://localhost:5672')
        const channel = await connection.createChannel();
        console.log("connected to rabbit MQ")
        return channel
    } catch (error)
    {
        console.error("dfsdfg",error.message)
    }
}

const main = async () => {
  const channel = await connect();
  // Use the channel for further operations
};
main()