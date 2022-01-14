const express=require ('express');
const app=express();
const port=3001;

const tel=[{
	numberTel: "89270729413",
	sumTelmobile:"100"
}
]

app.get ('/', (req, res)=> {
	
	res.status(200).send('get запрос');
		
});
app.get ('/pagemts', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');
		
});
app.get ('/pagebilain', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');
		
});

app.get ('/pagemegafon', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');	
});

app.get ('/pagetele2', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');	
});

app.get ('/pageyota', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');	
});

app.get ('/pagemesber', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');	
});

app.get ('/pagerostelecom', (req, res)=> {
	res.json(tel);
	res.status(200).send('get запрос');	
});


app.post ('/', (req, res)=> {
	res.status(200).send('post запрос');
		
});
app.post ('/tel', (req, res)=> {
	tel=tel.contact(req.body);
	res.send(tel);
	res.status(200).send('post запрос');
		
});


app.listen (port, ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
})