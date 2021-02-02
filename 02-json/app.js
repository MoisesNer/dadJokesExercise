const data = `{"ticker":{"base":"BTC","target":"USD","price":"34850.06174276","volume":"39398.05257519","change":"-46.48846996"},"timestamp":1612287662,"success":true,"error":""}`

const parsedData = JSON.parse(data);

const dog = { 
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

const stringified = JSON.stringify(dog);