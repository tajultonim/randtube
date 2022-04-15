# This website shows random youtube video to the user.

It simply uses youtube api to search a random query string and shows the first result.
It can also show zero viewed video. For this purpose it uses [Petittube](https://petittube.com/).

It offers API endpoint for random or zero viewed video.

# For Random Video

create a get request to this endpoint and you will get a random youtube video data.

```
https://randtube.vercel.app/api/random
```

# For Zero Viewed Video

create a get request to this endpoint and you will get a Zero Viewed youtube video data.

```
https://randtube.vercel.app/api/zeroviewed
```

# How To Use Video Data

to stream the video you can use ifream with a src like this:

```
<iframe width="630" 
        height="473" 
        src="https://www.youtube.com/embed/[VIDEO_ID_HERE]?autoplay=1" frameborder="0"
        allowfullscreen></iframe>
```
