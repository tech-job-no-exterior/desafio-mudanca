const amenities = require(`${__dirname}/amenities.json`)
const fs = require('fs')

const allAmenities = []
for(var i = 0; i < 100; i++){
  for(const amenity of amenities){
    allAmenities.push(`${amenity} ${i}`)
  }
}

module.exports = (numFloors, delta = null) => {
  const fileName = `building-${numFloors}${(delta !== null) ? '-' + delta : ''}.json`
  try {
    return require(`${__dirname}/stored/${fileName}`)
  } catch (ignore) {}

  const output = []
  for(var i = 1; i <= numFloors; i++){
    const allAmenitiesCopy = allAmenities.slice(0)
    const randomAmenitiesQuantity = Math.round(Math.random() * 2)
    const amenities = []
    for(var ii = 0; ii < randomAmenitiesQuantity; ii++){
      const randomAmenitiesIndex = Math.floor(Math.random() * (allAmenitiesCopy.length - randomAmenitiesQuantity))
      amenities.push(allAmenitiesCopy[randomAmenitiesIndex])
      allAmenitiesCopy.splice(randomAmenitiesIndex, 1);
    }
    output.push({
      name: `floor ${i}`,
      amenities
    })
  }

  fs.writeFileSync(`${__dirname}/stored/${fileName}`, "[")
  for(var i = 0; i < output.length; i++){
    try{
      var outputStr = JSON.stringify(output[i]) + ((i === output.length - 1) ? "]" : ",")
      fs.appendFileSync(`${__dirname}/stored/${fileName}`, outputStr, (err) => {
        if(err){
          console.log(`appendFileSync error`)
          console.log(err)
          console.log(output[i])
        }
      })
    } catch (err){
      console.log(`unknown index: ${i}`)
      console.log(err)
      console.log(output[i])
      break;
    }
  }
  return output
}