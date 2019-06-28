1.  Explain the differences between `client-side routing` and `server-side routing`.

Client-side is handled by Javascript in the browser. All the content will be loaded from the server on the first request and any further requests will be done using AJAX. This means you may downlaod data you never use, but routing between views is faster.

Server side rquires sending a new GET request to the server for each page resulting in a page refresh. Only the content requrested with me returned and this is optimized for SEO. 


1.  What does HTTP stand for?

HyperText Transfer Protocol

1.  What does CRUD stand for?

Create Read Update Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create = Post
Read = Get
Update = Put
Delete = Delete

1.  Mention three tools we can use to make AJAX requests

XmlHttpRequest, Fetch, or a library such as Axios