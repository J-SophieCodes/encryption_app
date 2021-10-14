# Encryption App

An encryption app that processes classified documents (text format) and remove censored text.

## Setup

1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
2. Clone this repository.
3. `cd` into encryption_app and run `npm install` from the command line to install all dependencies

## Running the app

1. `cd` into encryption_app.

2. Create a `.env` file with the following environment variables:
    ```
    KEYWORDS=typesetting "Lorem Ipsum" 'of the' from
    CASE_SENSITIVE=false
    FILE_LOCATION=./documents/
    FILE_NAME=lorem_ipsum
    SAVE_LOCATION=./censored_documents/
    ```
    Note:
    - KEYWORDS: A string of censored keywords and phrases separated by spaces or commas. Phrases should be enclosed in single or double-quotes.
    - CASE_SENSITIVE: Specify whether the specified `KEYWORDS` should be case-sensitive (true), or not case-sensitive (false);
    - FILE_LOCATION: You may specify any directory, or save the file within the `./documents/` folder within the project directory.
    - FILE_NAME: Specify the name of the file without the extension. The file should be of type `.txt`.
    - SAVE_LOCATION: You may specify any directory, or save the file within the `./censored_documents/` folder within the project directory.


3. Run `npm start` to run the encryption. Document text with specified keywords and phrases will be removed and replaced with `XXXX`.

4. The censored file can be found in the specified `SAVE_LOCATION`.
