# String-Calculator

<!-- TABLE OF CONTENTS -->
<details open>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#apis">Apis</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a>
            <ul><li><a href="#npm-module-installation">NPM Module Installation</a></ul></li>
            <ul><li><a href="#env-file">ENV File</a></ul></li>
        </li>
        <li><a href="#running-server">Running Server</a>
            <ul><li><a href="#running-unit-tests">Running Unit Test</a></ul></li>
            <ul><li><a href="#running-server-locally">Running Server Locally</a></ul></li>
            <ul><li><a href="#running-eslint-fix">Running Eslint Fix</a></ul></li>
        </li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- String Calculator expose a API which extracts all the positive numbers from the given string and return their sum.
- The Service also API version control.

- #### Apis:

  - Api to fetch value of a string (stringCalculator).

#### Note: The service uses Basic auth token for authentication of Apis

Below is curl of local-env API

```sh
curl --location 'http://localhost:5000/api/v1/stringCalculator/' \
--header 'Authorization: Basic basicToken' \
--header 'Content-Type: application/json' \
--data '{
  "inputString": "//;-1;-2,&&87&-3, -55555555, -111111,**10%%1dfghjk1o1"
}'
```

<p align="right">(<a href="#string-calculator">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

The following commands starts the server.

```sh
npm run dev
```

### Prerequisites

- #### npm module installation

  ```sh
  nvm use 20
  npm install
  ```

- #### Env File

  Use the below file a sample .env.dev for getting started with the project.

  #### _Create a new file with name ".env.dev" in root dir_ and paste the below contents in it.

  ```sh
  ENV=development
  PORT=5000
  BASIC_AUTH_TOKEN=basicToken

  ```

### Running Server

- #### Running Unit Tests

Use the below command to run all the unit tests

```sh
npm run test
```

- #### Running Server Locally

Use the below command to run server on local machine

```sh
npm run dev
```

- #### Running Eslint Fix

Use the below command to check and fix all the eslint errors

```sh
npm run lint
npm run lint:fix
```

## Contact

Dhananjaya.M - [@my_website](https://djay-m.github.io/resume/)

Project Link: [https://github.com/Djay-M/String-Calculator](https://github.com/Djay-M/String-Calculator)

<p align="right">(<a href="#string-calculator">back to top</a>)</p>
