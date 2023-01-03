function filter(data, criteria){
    let input = JSON.parse(data);

    if (criteria === "all"){
        for (let entry of input){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
    }

    for (let entry of input){
        if (criteria.includes('id') && entry.id === criteria.split('-')[1]){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
        else if (criteria.includes('first_name') && entry.first_name === criteria.split('-')[1]){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
        else if (criteria.includes('last_name') && entry.last_name === criteria.split('-')[1]){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
        else if (criteria.includes('email') && entry.email === criteria.split('-')[1]){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
        else if (criteria.includes('gender') && entry.gender === criteria.split('-')[1]){
            console.log(`${entry.id - 1}. ${entry.first_name} ${entry.last_name} - ${entry.email}`);
        }
    }
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all');