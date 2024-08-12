const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001

let app = express();
app.use(express.static('./build'));

app.get("/", function(request, response){
	//response.send("IT'S ALIVE!!");
	response.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(PORT, function(){
	console.log("Started application on port %d", PORT);
});
