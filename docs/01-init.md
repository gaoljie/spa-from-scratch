## Node

install Node
https://nodejs.org/en/download/

## Yarn

install yarn https://yarnpkg.com/en/

## Init Project

```bash
mkdir project-name
cd project-name
yarn init
```

## Init Git

install git https://git-scm.com/downloads

init git `git init`

create .gitignore

```
.DS_Store
/*.log
.idea/
node_modules/
yarn.lock
dist/
```

connect git to remote repository

```bash
git commit -m "first commit"
git remote add origin git@github.com:username/project-name.git
git push -u origin master
```