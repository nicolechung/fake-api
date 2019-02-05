# Setup

```
npm install
```

# In your frontend project:
Add a `proxy` setting to your devserver settings in webpack.dev.js:

```
proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false
      }
}
```

Note: you have to set the port to whatever port your server is actually running on (it might not be 8000).

If you don't do this you will have a CORS error because your `backend` is not running on the same port as your `frontend`

# Run

```
npm start
```

# API

<<<<<<< HEAD
localhost:8000/api/feeds
localhost:8000/api/feeds/<some-id>


=======
```localhost:8000/feeds```
```localhost:8000/feeds/<some-id>```
>>>>>>> master
