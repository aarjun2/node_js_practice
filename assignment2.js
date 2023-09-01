function fakePromise(timeTaken, dataVal) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const jsonData = JSON.stringify(dataVal);
                resolve(jsonData);
              } catch (error) {
                reject(error);
              }
        }, duration)
    })
}


const duration = 1000;
const expectedData = { message: 'Hello, World!' };

fakePromise(duration,expectedData).then((expectedData) => {
    const parsedData = JSON.parse(expectedData);
    console.log(parsedData); 
}).catch((error) => console.log(error));