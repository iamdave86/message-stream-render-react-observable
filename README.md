## Message stream render with React and Observable

The app renders a stream of messages coming from an API using faker.

### About

Different messages will be rendered in different colors and columns by priority.
The 3 priorities are:

- 0 = error
- 1 = warning
- 2 = info

Each time a message with the priority level of error is received, a snackbar containing the error message appears at the top right of the application.
The error disappears in 2 seconds, or when another error message takes its place, or when the user clears it via the provided button located in the error message.

A user is able to:

- clear all messages at any point
- clear a specific message in a specific column
- start and stop incoming messages. By default the messages are running and displaying in columns
- see a count of specific messages in each column

### Install and Run

```
yarn install
yarn start
```

Open http://localhost:3000
