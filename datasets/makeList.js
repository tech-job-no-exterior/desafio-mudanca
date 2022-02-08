const amenities = require(`${__dirname}/amenities.json`)
const fs = require('fs')

const allAmenities = []
for(var i = 0; i < 100; i++){
  for(const amenity of amenities){
    allAmenities.push(`${amenity} ${i}`)
  }
}

module.exports = (quantity) => {
  const fileName = `list-${quantity}.json`
  try {
    return require(`${__dirname}/stored/${fileName}`)
  } catch (ignore) {}

  const output = []
  const allAmenitiesCopy = allAmenities.slice(0)
  for(var ii = 0; ii < quantity; ii++){
    const randomAmenitiesIndex = Math.floor(Math.random() * (allAmenitiesCopy.length - quantity))
    output.push(allAmenitiesCopy[randomAmenitiesIndex])
    allAmenitiesCopy.splice(randomAmenitiesIndex, 1);
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