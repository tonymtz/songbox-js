# Songbox

Songbox is a web service that allows users to listen to their music stored in Dropbox without having to install any app, directly from a web interface.

## Features:

1. Out of the box solution for mobile devices.
2. Dropbox stream cross-platform player.
3. Play music, mp3, audiobooks from Dropbox.
4. Supported audio formats: mp3, off-vorbis, aac, m4a, Flac?.
5. No need to install Dropbox app.
6. Access to Dropbox audio content anywhere
7. All your music, songs, audio, audio books, audio reports in one place.

**Other:**

1. Using HTML5 web browser.
2. No need to install any additional software.
3. No stored files in system memory.
4. Free to use.

## Installation

```shell script
Webapp
$ cd webapp/
$ npm install
$ npm start

Server
$ cd /server 
$ npm install
$ npm run start
```

## .env file for /server

```
CLIENT_ID=<Key from dropbox app>
URL=<Url of your website>
DATABASE_USER=<Database user>
DATABASE_HOST=<Database url>
DATABASE_PASSWORD=<Database password>
DATABASE_NAME=<Database name>

**Check sample.env**
```

## API 

```
For both routes we will need a 'dbx-token' inside our headers (token given from dropbox).

** 1. GET -> /api/files **
This route will give you all files from the root of your Dropbox.


** 2. GET -> /api/files/* **
This route will give you access to an specific folder of your Dropbox (specifying the route where the '*' is).


**3. GET -> /api/file/filename.mp3
This route will give access to the file link.

**4. GET -> /api/me
This route will check if your token is valid and return the information of the user.

**5. POST -> /
This will save the cookie on the route of the website.


https://documenter.getpostman.com/view/9987408/TVRj6orw#52f42304-ce6a-4336-8e95-0a4d26ca6904
```


Simple as that...
