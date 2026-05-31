let json = [
  {
    "id": "E1001",
    "firstName": "سارة",
    "lastName": "عبدالله",
    "email": "sara.abdullah@company.com",
    "phone": "+966554432211",
    "dateOfBirth": "1990-07-22",
    "hireDate": "2020-01-15",
    "position": "مديرة تسويق",
    "department": "التسويق",
    "salary": 18500,
    "isActive": true
  },
  {
    "id": "E1002",
    "firstName": "فهد",
    "lastName": "القحطاني",
    "email": "fahad.alqahtani@company.com",
    "phone": "+966507891234",
    "dateOfBirth": "1985-11-02",
    "hireDate": "2015-06-01",
    "position": "مهندس برمجيات",
    "department": "تقنية المعلومات",
    "salary": 22000,
    "isActive": true
  },
  {
    "id": "E1003",
    "firstName": "نورة",
    "lastName": "الخالدي",
    "email": "nora.alkhaldi@company.com",
    "phone": "+966567123456",
    "dateOfBirth": "1995-03-10",
    "hireDate": "2022-09-20",
    "position": "محللة بيانات",
    "department": "الذكاء الاصطناعي",
    "salary": 14500,
    "isActive": true
  },
  {
    "id": "E1004",
    "firstName": "عمر",
    "lastName": "الغامدي",
    "email": "omar.alghamdi@company.com",
    "phone": "+966598765432",
    "dateOfBirth": "1980-12-05",
    "hireDate": "2010-11-11",
    "position": "مدير مالي",
    "department": "المالية",
    "salary": 27500,
    "isActive": false
  }
]

  import {writeFile} from 'fs'


// console.log(typeof json) // object 

function convertTocsv(json){
    let body = "";

let head = '' ;
// get header string 
Object.keys(json[0]).forEach( h => {
head += h+","
})

// convert to array 
head = head.split(",")

// remove last item 
head.pop()

// head [ id , name ]
// json [ {id,name } , {id , name}]
json.forEach(k => {
   head.forEach(v => {
        body += k[v] + ","
   })
   body += "\n"
})

// head.forEach(element => {
//         body += json[element] + ","
// });

head = head.join(",") // [header body ] string 

head += "\n" // [header body ] + new line 

body = body.slice(0,-1) // remove [,] in last string 

body += "\n"  // [body body ] + new line 


let csv = "";

csv = head + body 

// console.log(csv)
// // console.log(head)
// console.log(typeof csv)


// json.forEach(element => {
//         head +=`\n\"${element.id}\",\"${element.firstName}\",\"${element.lastName}\",\"${element.email}\",\"${element.phone}\",\"${element.dateOfBirth}\",\"${element.gender}\",\"${element.gender}\",\"${element.major}\",\"${element.isActive}\",`
// });

    return csv
}

writeFile('file.csv',convertTocsv(json),(err)=>{
    if (err) {
        console.error(err)
    }
})

