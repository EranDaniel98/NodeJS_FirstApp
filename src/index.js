const express = require("express");
const path = require("path");

const PORT = 8080;

let app = express();
app.use(express.static('dist'));

app.get("/", function(request, response){
	response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, function(){
	console.log("Started application on port %d", PORT);
});
