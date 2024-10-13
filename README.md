# URL Checker

App that allows a user to check if an entered URL exists. \
This was a technical challenge for a job application.

#### Requirements

- [x] The user shall be able to enter an URL.
- [x] The check for the URL format and the existence check shall be triggered
      as the user is typing, but the existence check shall be throttled to avoid
      that too many server requests are done all the time.
- [x] The URL must then be checked for valid format.
- [x] If the format is correct, it shall be sent to a server which provides the
      information if the URL exits and if it is a file or a folder.
- [x] You shall not implement the server side, but just mock it on the client.
- [x] The server call shall be asynchronous.

## Run

Run `docker compose up` and open [http://localhost:3000](http://localhost:3000) on your browser.
