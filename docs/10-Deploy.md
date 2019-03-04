## install gh-pages

`yarn add gh-pages --dev`

## deploy

add following line to npm script

`"deploy": "git checkout master && git pull && yarn build && gh-pages -d dist"`

now you can go to your github address

https://[USERNAME].github.io/[PROJECT-NAME]/
