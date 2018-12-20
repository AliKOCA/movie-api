
<h1>node.js ile Movie API Misali</h1>

Node.JS Misalleri

|Route|Http Verb|POST Body|Description|
| --- | --- |  --- |  --- |
| /api/movie/ | `GET` |  Empty |  Return all movies. |
| /api/movie/ | `POST` |  {"title": "Hicranlı Yüzler-2", "category": "ezgi", "country": "Türkiye", "year": 2000, "imdb_score": 25000} | Create new movie. |
| /api/movies/:movie_id | `GET` | Empty | Get a movie. |
| /api/movies/:movie_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a movie with new info. |
| /api/movies/:movie_id | `DELETE` | Empty | Delete a movie. |
| /api/movies/top10 | `GET` | Empty | Get the top 10 movies. |
| /api/movies/between/:start_year/:end_year | `GET` | Empty | Movies between two dates. |

# Directors

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/directors | `GET` | Empty | List all directors. |
| /api/directors | `POST` | { "name": "Ender", "surname": "Doğan", "bio": "İrfan Türküleriyle bizi tanıştıran hakiki sanatçı." } 
| Create a new director. |
| /api/directors/:director_id | `GET` | Empty | Get a director. |
| /api/directors/:director_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a director with new info. |
| /api/directors/:director_id | `DELETE` | Empty | Delete a director. |
| /api/directors/:director_id/best10movie | `GET` | Empty | The director's top 10 films. |

# Index

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'pardus', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'pardus', password:'1234' } | Generate a token. |


enjoy!
