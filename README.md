# angular2-webpack-aspnetcore
Project template for angular2 applications built with webpack, tested with karma and protractor and hosted with ASP.NET Core

The ASP.NET Core parts are completely optional and only serve the purpose of showcasing how this type of single page application can get hosted and deployed by an ASP.NET Core application. 
However, this project template is 100% functional also when
- Using only the parts in the "Frontend" subfolder
- Omitting the following ASP.NET specific parts
  - Frontend.xproj
  - Program.cs
  - Startup.cs
  - project.json
  - web.config
  - Properties/

# Getting started
- Make sure you have the latest node & npm installed
- Clone this repository
- Navigate into the cloned folders "Frontend" subfolder
- npm install
- npm run dev
- Open http://localhost:8080/webpack-dev-server/wwwroot/Index.html in a browser
- The application should be shown

# Preconfigured commands
- "npm run build" builds the application in release mode, minifying output and without sourcemaps, placing output in the "wwwroot" subfolder
- "npm run dev" starts the webpack dev server with the application compiled with debug-friendly options. Enables debugging TypeScript source code within the browser, and reloads the app on every source file change.
- "npm run test" runs the unit tests. If you reconfigure karma to let the browser stay open, you can debug tests in the TypeScript source code
- "npm run test-coverage" runs the unit tests with code coverage instrumentation and analyis enabled. Puts coverage results in the "Frontend/test/unit/coverage" subfolder. The first run will create only create coverage results based on the JavaScript code transpiled from TypeScript source code. Each subsequent run will also remap the results of the previous run to the TypeScript sources. This is a workaround until https://github.com/ChristianEder/angular2-webpack-aspnetcore/issues/1 is resolved
- "npm run e2e" runs the protractor UI tests
