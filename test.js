const array = ["apple", "kiwi", "orange", "apple", "kiwi", "kiwi", "kiwi", "kiwi" ]
const result = array.reduce((acc, rec) => {
    if (acc[rec] === undefined) acc[rec] = 0
    return {
        ...acc,
        [rec]: acc[rec]  + 1,    
    }
},{})

console.log(result)