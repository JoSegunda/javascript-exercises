const csv_to_array = (data, delimiter=',') =>
    data.split('\n').map(v => v.split(delimiter))
    

console.log(csv_to_array('a,b\nc,d'))