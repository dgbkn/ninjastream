const express = require('express')
const fs = require('fs')
const path = require('path')
const http = require('http')
const request = require('request')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
})

let domain = 'https://thawing-scrubland-27252.herokuapp.com/';

// let target = 'http://fxqv1b9sa9zmbmotrxqhga-on.drv.tw/m/Tandav%20(2021)%20720p%20Hindi%20S-01%20Ep-[01-09]%20HDRip%20x264%20AAC%201.4GB[MB].mkv';
// // figure out 'real' target if the server returns a 302 (redirect)
// http.get(target, resp => {
//   if(resp.statusCode == 302) {
//     target = resp.headers.location;
//   }
// });

app.use(express.static('dist'));

app.get('/api', (req, res) => {
  var uri = req.query.uri; // $_GET["id"]

  req.pipe(request.get(uri)).pipe(res);
});


app.get('/fembedstream', (req, res) => {
  var uri = req.query.id; // $_GET["id"]
  var index = req.query.index;

  request.post(
    'https://www.fembed.com/api/source/'+uri,
    { json: { r: '' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // body = JSON.parse(body);
          //  console.log(body);

           body =  body['data'];


        var  final =[];
           body.forEach(element => {

            
            // request(element['file'], {method: 'HEAD'}, function (err, res, body){
            //  final.push(element['file']);
            // });

            final.push(element['file']);

           });         


            // res.send(final);
             req.pipe(request.get(final[index])).pipe(res);


        }
    }
);
});






app.get('/fembed', (req, res) => {
  var uri = req.query.id; // $_GET["id"]

  request.post(
    'https://www.fembed.com/api/source/'+uri,
    { json: { r: '' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // body = JSON.parse(body);
          //  console.log(body);

           body =  body['data'];


        var  final =[];
           body.forEach(element => {
             var index = body.indexOf(element);
            final.push
            (              
              [element['label'],domain+'fembedstream?id='+uri+'&index='+index]
            
            );
           });         


            // res.send(final);
             res.send(JSON.stringify(final));
        }
    }
);
});























app.listen(process.env.PORT || 3000);

// asdadsadasdasddsadsad
// app.get('/video', function(req, res) {
//   const path = 'assets/sample.mp4'
//   const stat = fs.statSync(path)
//   const fileSize = stat.size
//   const range = req.headers.range

//   if (range) {
//     const parts = range.replace(/bytes=/, "").split("-")
//     const start = parseInt(parts[0], 10)
//     const end = parts[1]
//       ? parseInt(parts[1], 10)
//       : fileSize-1

//     if(start >= fileSize) {
//       res.status(416).send('Requested range not satisfiable\n'+start+' >= '+fileSize);
//       return
//     }
    
//     const chunksize = (end-start)+1
//     const file = fs.createReadStream(path, {start, end})
//     const head = {
//       'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': chunksize,
//       'Content-Type': 'video/mp4',
//     }

//     res.writeHead(206, head)
//     file.pipe(res)
//   } else {
//     const head = {
//       'Content-Length': fileSize,
//       'Content-Type': 'video/mp4',
//     }
//     res.writeHead(200, head)
//     fs.createReadStream(path).pipe(res)
//   }
// })

// app.listen(3000, function () {
//   console.log('Listening on port 3000!')
// })
