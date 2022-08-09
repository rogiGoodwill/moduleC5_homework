const parser = new DOMParser();
const xmlString = `
    <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list");
const studentCount = listNode.querySelectorAll("student");

let list = [];
for (i = 0; i < studentCount.length; i++){
  const studentNode = studentCount[i];
  const nameNode = studentNode.querySelector("name");
  const nameFirst = nameNode.querySelector("first");
  const nameSecond = nameNode.querySelector("second");
  let name = nameFirst.textContent + " " + nameSecond.textContent;

  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const langAttr = nameNode.getAttribute("lang");
  
   list[i] = {
    "name": name,
    "age": Number(ageNode.textContent),
    "prof": profNode.textContent,
    "lang": langAttr
  };
};


console.log(list);

