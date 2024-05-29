function fOne(){
    console.log("normal/synchronous function");
}

async function fTwo(){
    // time taking operations
  const data  = await fetch("https://jsonplaceholder.typicode.com/users")
  const actualData = await data.json()

  console.log(actualData);
}

fTwo()
fOne()



//pROMISES IN JS

// Synchronous code is executed line by line, waiting for one operation to finish before moving to the next. If the operation takes time , like fetching data from a server, or performing very heeavy calculations, the entire program halts/is paused untile the operation is done.
// this can make an application unresponsive for a while
//to avoid this, for such time taking operations, we use assynchronous code
// Assynchronous code/programming can start multiple operations at once and continue with other tasks while waiting for the slow operations to complete.
// this guarantees improved responsiveness and efficiency

// Callbacks can help achieve this by calling a function after an operation, and sometimes even nesting callbacks(multiple levels of callbacks/ callback hell)
// however code can get difficult to read with callbacks, hence the async .. await and .then (promises) were included in js through the task queue/event loop