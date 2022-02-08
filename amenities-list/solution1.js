const { buildings, list } = require(`${__dirname}/_dataload.js`)

console.time('runtime')
let chosen = {}
for(const item of list){
  for(const building of buildings){
    for(const floor of building.floors){
      for(const amenity of floor.amenities){
        // @todo
      }
    }
  }
}
console.timeEnd('runtime')

console.log(`O prédio escolhido foi o "${chosen.name}".`)