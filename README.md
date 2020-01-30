### What to test
1. Look at each individual part of the application. 
2. Imagine telling a friend 'here what this piece of code does'
3. Write a test to verify each part does what you expect.

### Structure of test 
it (desctiption of the test, function of the test logic)
expect (value we are expecting).matchStatment(value that we expect to see)

### JSDOM
JSDOM library allows react code to be tested without rendering on browser. 
create-react-app installas JSDOM automatically. 

### Enzyme
Enzyme needs to be installed, 
`npm install --save enzyme enzyme-adapter-react-16`
imported and configured in setupTests.js

### Enzyme API
- Static: render the given component and return plain HTM:
- Shallow: Render just the given compoenent NOT children
- FullDOM: render compoenent + all of its children + allows modify afterwards

### Absolute imports
Allows to import components with absolute paths. 
https://create-react-app.dev/docs/importing-a-component/#absolute-imports
Create jsconfig.json in root of the project, copy the following code and restart the server. 
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```



