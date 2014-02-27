var sql = require('./node_modules/sql-parser/lib/sql_parser')
  ,doc = process.argv[2]
  ,query = process.argv[3]

/*
for(var key in sql) {
  exports[key] = sql[key]
}
*/

if (!doc || !query) {
  console.log("Usage:\n" + "\tnode jsonql.js 'path/to/document.json' 'YOUR SQL QUERY'")
  return 0;
}


//console.log(lexer.tokenize('SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2'));
//console.log(sql.parse('SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2'));

var json = require(doc);
console.log(JSON.stringify(json, null, 4));

var sqlObj = sql.parse(query);
console.log(JSON.stringify(sqlObj, null, 4));

function where (where, row) {
  var isTrue = true;
  if (!where)
    callback (null, row);
  else {
    var operation = where.conditions.operation;
      switch(operation) {
        case'=' :
          isTrue = !isTrue?isTrue:row[where.conditions.left.values[0]] == where.conditions.right.value;
          break;
      }
  }
  //callback(row, isTrue);
  return isTrue;
}

console.log( '[');
json[sqlObj.source.name.values[0]].forEach(function(row){
  if (where(sqlObj.where, row)) {
    if (sqlObj.fields && Array.isArray(sqlObj.fields) && sqlObj.fields[0] != '*') {
      var columns = [];
      sqlObj.fields.forEach(function (field){
        columns.push( '{\"' + field.field.values[0] + '\": ' + row[field.field.values[0]] + '}' );
      });
      console.log(columns.join(', '))
    }
    else
      console.log( '\t' + JSON.stringify(row));
  };
});
console.log( ']');




