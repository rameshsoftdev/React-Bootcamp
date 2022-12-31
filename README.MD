# Learning React - Day 02

## Bundlers
 - A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser.
 - A fantastic feature of a bundler is that it generates a dependency graph as it traverses your first code files.
 - This implies that beginning with the entry point you specified, the module bundler keeps track of both your source files’ dependencies and third-party dependencies.
 - This dependency graph guarantees that all source and associated code files are kept up to date and error-free.
### Bundler examples - Vite, Parcel, and Webpack

## Parcel - Features
 - Hot Module Replacing
 - Reload changes automatically on browser
 - Uses File Watcher algorithm (C++)
 - Bundling
 - Minifying
 - Cleaning our code
 - Dev production build
 - Uses super fast build algorithm
 - Image optimization
 - Caching while development
 - Compression
 - Compatible with older version of browsers
 - Https on dev 
 - Manages port numbers
 - Uses consistent hashing algorithm
 - Zero configuration
 - Create a server

## package.json VS package-lock.json
- Manages Transitive dependencies

 |package.json  | package-lock.json|
 |------------- | -------------|
|It contains basic information about the project.  | It describes the exact tree that was generated to allow subsequent installs to have the identical tree.|
|It is mandatory for every project.  | It is automatically generated for those operations where npm modifies either node_modules tree or package.json.|
|It records important metadata about the project. | It allows future devs to install the same dependencies in the project.|
|It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project. |


### To install Parcel, use below command
 
 ```
 npm install -D parcel 
 
 ```
 - Where -D stands for dev dependency, so it will be used in development environment.

 ### To Execute Parcel

 ```
 npx parcel index.html

 ```

 



