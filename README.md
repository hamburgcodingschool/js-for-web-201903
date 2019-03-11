# js-for-web-201903
Repository for the course "JavaScript for Web" of March 2019.

JavaScript for Web

## Session 1

How does the internet work?  
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work

Client and Server  
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview

HTTP handshake  
https://serverfault.com/questions/570387/https-overhead-compared-to-http 

Status codes  
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status   
https://http.cat/

JSON  
https://json.org/   
You can try in console:  
```json
{
key: 'value'
}
```
```
[1, 2, 2]
```

JSON actions  
```
JSON.stringify([1,2,2])
```
```
JSON.stringify({key: 'value'})
```
```
JSON.parse("\"key\": \"value\"}")
```

Postman  
https://www.getpostman.com/

List of nice APIs:   
https://www.programmableweb.com/ 

Beer API   
http://api.brewerydb.com/v2/

Open Weather Map:  
https://openweathermap.org/

APIs and how they work:  
https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work 

HTTP Methods:  
- GET
- HEAD
- POST
- PUT vs PATCH
- DELETE
- CRUD: Create Read Update Delete

Install Node.js:  
https://nodejs.org/en/

Install a web server:  
```
npm install http-server -g
```

Start the web server:  
```
http-server
```

Stop it with:   
`Control` + `C`

Start server in folder:  
```
http-server folder
```

HTTP Server:  
- JavaScript is a scripting language
- browser interprets that language
- every browser has its own engine for that
- node.js starts a server
- the server creates an HTTP connection
- the browser is a client
- every side has its own javascript engine

Fetch API  
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 

