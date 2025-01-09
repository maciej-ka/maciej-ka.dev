### Skills Portfolio

#### Visit hosted

https://www.maciej-ka.dev/

#### Run on local

```bash
git clone git@github.com:maciej-ka/maciej-ka.dev.git
cd maciej-ka.dev
npm i
npm start
```

And visit localhost:5173

#### Run on Docker

Dockerfile contains nginx production setup.  
To test container locally

```bash
npm run start:docker
```

And visit localhost:8000

There is also a debug command in case image has  
problems and needs to be inspected in bash

```bash
npm run debug:docker
```

#### Tests and checks

Project has several tests and checks.  
They are all reported in pull requests

- prettier `npm run test:prettier`
- eslint `npm run test:eslint`
- typescript `npm run test:typescript`
- playwright `npm run test:integration`

Run them all locally

```bash
npm test
```

Fix ESLint and Prettier

```bash
npm run eslint:fix
npm run prettier:fix
```

Start Playwright UI client

```bash
npm run test:integration:ui
```

#### Links

[Figma design](https://www.figma.com/design/AcmzPsGSY5WzvuiS4RlWPS/Skills-Portfolio?node-id=0-1&t=93soLU4iDki44hXi-1)
