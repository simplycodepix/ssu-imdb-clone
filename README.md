## Plan
### Information system contains information about:
    [] - movies
        [] - Movie can have multiple countries
        [] - Movie can have multiple genres
    [] - users
    [] - movie rating

### Features
    [] - Movie average rating
        [] - Show rating only if more then 10 people voted, otherwice rating = 0
        [] - Rating affect only from users with more than 5 votes
    [] - Find movies that were rated by user X
    [] - Find user most voted genre
    [] - Find average rating for the country between x and y year
    [] - Find top 5 movies by rating
    [] - Find movie suggestions for user
    [] - Aggregate rating for different user groups


### Advanced Features
    [] - Display table data
    [] - CRUD functionality 

### Movie
    - id
    - title
    - year
    - description

### User
    - id
    - username
    - firstName
    - lastName
    - email
    - password
    - role

### Rating
    - movie_id
    - user_id
    - rating

### Genres
    - id
    - name

### Movie_Genre
    - movie_id
    - genre_id

### Location
    - movie_id
    - location
