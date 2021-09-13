Innowise Lab Internship Level 0 Custom calculator

[TASK](https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit#)

# Demo
[Calculator](https://hardcore-goldberg-250d5e.netlify.app/)

# How to run the app
1. Clone this repo:
  ```
  $ git clone https://github.com/JacksonFrontEnd/Calculator.git
  ```
2. Open the directory in code editor
3. Using git checkout enter in branch develop
	 ```$ git checkout advanced-calculator```
4. Run npm install
  ```$ npm install```
5.  Run the application with the command
      ```$ npm run dev```

# npm scripts
- For run project locally 
```$ npm run dev```
- For build project 
```$ npm run build```
- For eslint check errors
```$ npm run lint```
- For run tests
```$ npm run test```

# Folders sturture
```
└──src
    ├──buttons
    	├──config.scss
        ├──index.scss
        └──index.ts
    ├──command						        
        ├──calculate-base-operation.ts
        └──calculator.ts
    ├──const				     
        └──const.ts  
    ├──display
    	├──display-function.ts
        ├──index.scss
        └──index.ts
    ├──logic
        ├──base-math-function.ts
        ├──math-function.ts
        └──index.ts
    ├──utils
    	├──types.ts
        └──utils.ts
    
    ├──app.ts					
    ├──index.html	
    ├──index.scss
    └──index.ts
└──test
    └──base_operation.test.ts    
```
 # APPLICATION STACK
 
### TypeScript

### Webpack

### ESLint 

### Prettier
