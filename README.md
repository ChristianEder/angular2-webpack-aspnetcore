# angular2-webpack-aspnetcore
Project template for angular2 applications built with webpack, tested with karma and protractor and hosted with ASP.NET Core

The ASP.NET Core parts are completely optional and only serve the purpose of showcasing how this type of single page application can get hosted and deployed by an ASP.NET Core application. 
However, this project template is 100% functional also when
- Using only the parts in the "Frontend" subfolder
- Omitting the following, ASP.NET specific parts
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
