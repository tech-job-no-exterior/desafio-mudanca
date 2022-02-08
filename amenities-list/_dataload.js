const makeBuilding = require(`${__dirname}/../datasets/makeBuilding`)
const makeList = require(`${__dirname}/../datasets/makeList`)

const numBuildings = 200
const numFloors = 100
const numListItems = 10

console.time('datasets loaded')
const buildings = []
for(var i = 0; i < numBuildings; i++){
  buildings.push({
    name: `building ${i}`,
    floors: makeBuilding(numFloors, i)
  })
}
const list = makeList(numListItems)
console.timeEnd('datasets loaded')

module.exports = {
  buildings,
  list
}