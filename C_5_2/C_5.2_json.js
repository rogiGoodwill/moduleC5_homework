const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const result = [];
//console.log(data.list[1].name);
//console.log(list[0].name)

for (i = 0; i < data.list.length; i++){
  result[i] = {
    name: list[i].name,
    age: Number(list[i].age),
    prof: list[i].prof    
  };  
};

console.log(result)