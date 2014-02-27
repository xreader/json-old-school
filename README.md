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

Call jsonql with path to json document and sql query
```
node jsonql.js ./document.json 'select firstName, lastName from employees'
```

Output of this call

```
[
  {"firstName": John}, {"lastName": Doe}
  {"firstName": Anna}, {"lastName": Smith}
  {"firstName": Peter}, {"lastName": Jones}
]
```

##What is supported
```
select * from table
select field1, field2  from table
select field1, field2 from table where field1 = "value"
```


That is all for now

more comming soon....
