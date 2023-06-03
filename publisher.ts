
import * as amqps from 'amqplib'


const connectRM = async () => {
    try
    {
        const connection = await amqps.connect(`amqp://localhost:5672`);
        const channel = await connection.createChannel();
        console.log("connected to rabbit MQ")
        const queueName = "userMessage"
        const message = "idonf get u"
        channel.assertQueue(queueName)
        channel.sendToQueue(queueName, Buffer.from(message))
        console.log(`message sent : ${message}`)
        return channel
    } catch (error)
    {
        console.error("dfsdfg",error.message)
    }
}

const main = async () => {
  const channel2 = await connectRM();
  // Use the channel for further operations
};
main()


const consume = async () => { 

    try
    {
        // await channel.
        
    } catch (error)
    {
        console.log(error)
    }
}




