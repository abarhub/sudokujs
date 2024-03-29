# Sudokujs

[![Tests CI](https://github.com/abarhub/sudokujs/actions/workflows/npm_action.yml/badge.svg?branch=master)](https://github.com/abarhub/sudokujs/actions/workflows/npm_action.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.8.

[Demo](https://abarhub.github.io/sudokujs/sudokujs/)

![Screenshot](/wiki/exemple_sudoku.PNG?raw=true 'Exemple Sudoku')

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Generate site

Run `npm run buildprod` to generate site on directory docs.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running unit tests without gui

Run `npm run test_no_ui` to execute the unit tests without gui via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build Docker image

Run `docker build -t sudokujs .` to build Docker image.

## Run Docker image

Run `docker run -dit --name sudokujs-app -p 8080:80 sudokujs` to start Docker image.

Go to `http://localhost:8080/`

## Stop docker image

Run `docker stop sudokujs-app` to stop Docker image.

## Update

Documentation for update is [here](UPDATE.md)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
