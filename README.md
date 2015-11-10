# Guest Speaker App
[![Build Status](https://travis-ci.org/blackstc/guest-speaker-app.svg?branch=master)](https://travis-ci.org/blackstc/guest-speaker-app)

## Overview
1. Part 1
  - App overview
  - Setup (Generator, Github, Travis CI, Heroku)
  - Add User Stories
  - Add Unit Tests
  - Add Code Coverage
1. Part 2
  - Authentication
1. Part 3
  - Add Feature One (via TDD)
1. Part 4
  - Add Feature Two (via TDD)
1. Part 5
  - Add Feature Three (via TDD)

## User Stories

1. As a user can-
  - view upcoming speakers
  - view past speakers
  - add feedback on past speakers
  - vote on potential upcoming topics
  - login/logout via Github
  - suggest new speakers/topics
1. As an admin-
  - approve/reject users
  - CRUD students
  - CRUD speakers
  - CRUD topics
  - toggle suggestion Feature

## Stack

- Issue Tracker: Github Issues
- Build System: Gulp
- Testing: Mocha, Chai, Travis CI, Istanbul (coverage)
- Language Runtime: ES5
- Package Mgmt: npm
- Server: Node, Express
- Database: Postgres
- Front End: jQuery
- CSS Framework: Skeleton
- Templates: Swig

## Tests

Without code coverage;

```sh
$ npm test
```

With code coverage:

```sh
$ npm run cov
```
