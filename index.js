const async = require('async')

const item = []

// create a queue object with concurrency 2
var q = async.queue((task, callback) => {
    setTimeout(() => {
        console.log("process  "+task.number)
        callback(); 
    }, 2000);
    
}, 1)

// assign a callback
q.drain = () => {
    console.log('all items have been processed');
}
for (i = 0; i < 10; i++) {
    item.push({ number: i })
}

q.push(item, (err) => {
    console.log('finished processing item')
})