# Ahead of Time Compilation with Webpack 2 and Angular 2 (TypeScript)

This is a simple example on how to achieve ahead of time compilation with Angular2 using 
Webpack 2 and the AotPlugin for Webpack. There's also an example of how to achive async module loading.
For a complete skeleton of Angular2 (with Webpack 2, lazy loading, AOT), use my fork of the angular class repo.

## Steps To Run
`npm install`
`npm start`
`http://localhost:3000/`

## Steps to Build Bundle
`npm install`
`npm run build`
`Open dist/`

### Important things for AOT with Webpack 2:
1. The AotPlugin is not a requirement. It makes it easier to use. The command line can also be used.
2. You need to add `angularCompilerOptions` section to the tsconfig.json and specify the entry module
3. Add the AotPlugin to Webpack config and add `@ngtools/webpack` as rule for .ts files

