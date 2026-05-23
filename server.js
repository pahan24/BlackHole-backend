const express = require("express");
const { exec } = require("child_process");

const app = express();

app.use(express.json());

app.post("/download",(req,res)=>{

const { url } = req.body;

exec(`yt-dlp -g "${url}"`,(error,stdout,stderr)=>{

if(error){

return res.status(500).json({
success:false,
error:"Failed"
});

}

res.json({
success:true,
downloadUrl:stdout.trim()
});

});

});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

console.log("Server running");

});