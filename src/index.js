import app from "./app.js"

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running on https://localhost:${PORT}`);
    console.log(process.env.PORT)
})