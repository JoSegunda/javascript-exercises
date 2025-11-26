
const csvToJson = (data) =>
    data.split('\n').map(v => v.split(','))


console.log(csvToJson('col1,col2\na,b\nc,d'))