#Use this tool to query json with sql syntax

##Install
```
git clone https://github.com/xreader/json-old-school.git
npm install
```

##Example


Assumning you have json document (document.json)
```
{
  "employees": [
    { "firstName":"John" , "lastName":"Doe" },
    { "firstName":"Anna" , "lastName":"Smith" },
    { "firstName":"Peter" , "lastName":"Jones" }
  ]
}
```


node jsonql.js ./document.json 'select firstName, lastName from employees'


Output of this call

```
[
  {"firstName": John}, {"lastName": Doe}
  {"firstName": Anna}, {"lastName": Smith}
  {"firstName": Peter}, {"lastName": Jones}
]
```

That is all for now

more comming soon....
