var loremIpsum = require('lorem-ipsum');

const express = require('express');
const app = express();



//       vv this is the request vv
app.get('/lorem/:number/:type', function (req, res){
  console.log("You're in '/lorem'");
  res.send(loremIpsum ({
     count: req.params.number,
     units: 'paragraphs',
    format: req.params.type
 }));
})



app.listen(3000, function () {
  console.log('Successfully started express application!')
});


//
// var loremIpsum = require('lorem-ipsum')
//   , output = loremIpsum ({
//      count: 'req.params.number'
//    , units: 'paragraphs'
//   , format: 'html'
// });
//
// const express = require('express');
// const app = express();
//
// //       vv this is the request vv
// app.get('/lorem/:number', function (req, res){
//   console.log("You're in '/lorem'");
//   res.send(output);
// })
//
// app.listen(3000, function () {
//   console.log('Successfully started express application!')
// });
