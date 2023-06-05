import * as amqps from 'amqplib'

const consumer  =async () => {
    try
    {
        const connection = await amqps.connect(`amqp://localhost:5672`);
        const channel = await connection.createChannel()
        const queueName = "userMessage"
        await channel.assertQueue(queueName)
        channel.consume(queueName, (message: any) => {
            try
            {
                console.log(`message recieved: ${message?.content.toString()}`)
                // Process the message here

                // Explicitly acknowledge the message
                channel.ack(message)
            } catch (error)
            {
                console.error(error)
                
              // Handle error scenario, optionally reject the message
                
                // Set the second parameter to "true" for requeue
                //false indicates that the message should not be requeued.
                //while true means that the message should be reque
               channel.reject(message, false); 
            }
          
        })
        return channel
    } catch (error)
    {
        console.log(error.message)
    }
}

consumer()