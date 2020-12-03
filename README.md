##
[![Codeship Status for JayCammarano/encrypt-events](https://app.codeship.com/projects/25a600fc-3ad9-4148-a22b-a56da9aff4ac/status?branch=master)](https://app.codeship.com/projects/420512)
A basic event manager with encryption using libsodium.

# Technologies used:

*Encryption:*  

 - libsodium / node-sodium
 - Backend is possible with RbNaCl
*Frontend: *

- JS/React
- Tailwind or Bulma or I suppose Foundation again not picky
*Backend: *

- Rails
- PostgreSQL

*Testing (Testing? LMAO):*

- Mocha/Mocha-Instabul for code coverage
- Rspec


# Setup Commands:
```
rails new encrypt-events -d=postresql --webpack=react
yarn add sodium
yarn global add mocha mocha-istanbul codecov
```
