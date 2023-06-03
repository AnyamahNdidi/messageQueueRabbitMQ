import * as amqps from 'amqplib'

const consumer  =async () => {
    try
    {
        const connection = await amqps.connect(`amqp://localhost:5672`);
        const channel = await connection.createChannel()
        const queueName = "userMessage"
        await channel.assertQueue(queueName)
        channel.consume(queueName, (message:any) => {
            console.log(`message recieved: ${message?.content.toString()}`)
            channel.ack(message)
        })
        return channel
    } catch (error)
    {
        console.log(error.message)
    }
}

consumer()