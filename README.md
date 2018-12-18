# Vuex SSR Pets
A proof-of-concept SPA using Vue, Vuex and Vue Router. Built off the template from Blake Newman's [excellent vuex-workshop](https://github.com/blake-newman/vuex-workshop).

## Run the app
+ Ensure you have recent Node and Yarn versions on your machine
+ `yarn`
+ `yarn run dev`
+ Visit `https://localhost:3443/pets/`

## Routes
+ `/pets/locations`
+ `/pets/locations/:id`
+ `/pets/detail/:id`

Changes to the two select inputs will update query parameters, which are in turned synced with Vuex state.

## License
MIT

