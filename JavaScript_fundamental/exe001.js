const csv_to_array = (data, delimiter=',', omitFirstRow=true) =>
    data.slice(omitFirstRow ? data.indexOf('\n')+1:0)
    

console.log(csv_to_array('a,b\nc,d'))