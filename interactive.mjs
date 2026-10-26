//Interactive JS//

function calculateEmissions(event) {
  event.preventDefault();

  // Car
  var miles = parseFloat(document.getElementById("car-miles").value) || 0;
  var cartype = document.getElementById("car-type").value;
  var carEmissionsg = 0;

  if (cartype === "gasoline") {
    carEmissionsg = miles * 404;
  } else if (cartype === "diesel") {
    carEmissionsg = miles * 450;
  } else if (cartype === "hybrid") {
    carEmissionsg = miles * 200;
  } else {
    carEmissionsg = miles * 404;
  }

  // Airplane
  var airplaneMiles =
    parseFloat(document.getElementById("airplane-miles").value) || 0;
  var ariplaneEmissionsg = airplaneMiles * 210;

  // Public transport
  var pulicMiles =
    parseFloat(document.getElementById("public-miles").value) || 0;
  var pulicType = parseFloat(document.getElementById("public-type").value) || 0;
  var pulicEmissionsg = pulicMiles * pulicType;

  // Motorbike
  var mbikeMiles =
    parseFloat(document.getElementById("motorbike-miles").value) || 0;
  var mbikeEmissionsg = mbikeMiles * 103;

  // Walking + biking (for completeness, even if no emissions)
  var walkMiles = parseFloat(document.getElementById("walk-miles").value) || 0;
  var bikeMiles = parseFloat(document.getElementById("bike-miles").value) || 0;

  // Total
  var totalTransEmissions =
    carEmissionsg + ariplaneEmissionsg + pulicEmissionsg + mbikeEmissionsg;

  //Transporation Message
  var carMessage = "";
  if (miles < 50) {
    carMessage = "🚗 Your car emissions are low, nice work!";
  } else if (miles < 200) {
    carMessage =
      "🚗 Your car emissions are average. Try carpooling or using public transport more!";
  } else {
    carMessage =
      "🚗 Your car emissions are high. Consider alternatives like biking, walking, or transit!";
  }

  var walkBikeMessage = "";
  if (walkMiles > 0) {
    walkBikeMessage += `🚶 You walked ${walkMiles} miles! Great for your health and the planet. `;
  }
  if (bikeMiles > 0) {
    walkBikeMessage += `🚴 You biked ${bikeMiles} miles! That's awesome!`;
  }

  //Housing
  var houseEmissions = 0;
  //Type of house
  var houseType = document.getElementById("house-type");
  var houseFactor = parseFloat(houseType.value);
  houseEmissions += houseFactor;

  //Heating
  var heatType = document.getElementById("heating-type");
  var heatFactor = parseFloat(heatType.value);
  houseEmissions += heatFactor;

  //Electricity
  var electType = document.getElementById("people");
  var electFactor = parseFloat(electType.value);
  houseEmissions += electFactor;

  //num people
  var numPeople = parseFloat(document.getElementById("people").value) || 1;
  houseEmissions = houseEmissions / numPeople;

  houseEmissions = houseEmissions * 2739.72603;

  //Message for housing
  var housemessage = "";
  if (isNaN(houseEmissions) || houseEmissions <= 8000) {
    housemessage =
      "✅ Low emissions! You're doing great! Keep conserving energy and using efficient appliances.";
  } else if (houseEmissions <= 15000) {
    housemessage =
      "⚠️ Medium emissions. You're around average. You can reduce your footprint by lowering thermostat settings and sealing drafts.";
  } else {
    housemessage =
      "❗ High emissions. Consider reducing heating, upgrading insulation, or switching to renewable energy sources if possible.";
  }

  //Food
  var foodEmissions = 0;
  //Meat
  var meatFreq = document.getElementById("meat-frequency");
  var meatValue = parseFloat(meatFreq.value);
  foodEmissions += meatValue;

  //Dairy
  var dairyFreq = document.getElementById("dairy-level");
  var dairyValue = parseFloat(dairyFreq.value);
  foodEmissions += dairyValue;

  //Eggs
  var eggFreq = document.getElementById("egg-level");
  var eggValue = parseFloat(eggFreq.value);
  foodEmissions += eggValue;

  foodEmissions = (foodEmissions * 1000) / 7;

  //Message for Food
  var foodMessage = "";
  if (foodEmissions <= 3000) {
    foodMessage =
      "🥦 Low food emissions! You're eating a planet-friendly diet. Keep it up!";
  } else if (foodEmissions <= 6000) {
    foodMessage =
      "🍽️ Moderate emissions. You're doing okay! Cutting back on meat or dairy could make a big difference.";
  } else {
    foodMessage =
      "🥩 High emissions. Food is choice! But consider reducing your consumption of red meat and dairy for a more sustainable diet.";
  }

  // Display result
  var result = document.getElementById("result");
  var totalEmissions = totalTransEmissions + houseEmissions + foodEmissions / 7;
  result.innerHTML =
    "🌍 Total Daily Emissions: " + totalEmissions.toFixed(2) + " g CO₂";

  //Display Result and compare
  var emissionFacts = {
    veryLow: [
      "That’s less than a cheeseburger's worth of emissions.",
      "You’d produce more CO₂ by charging your phone 1,000 times!",
      "That’s like leaving a LED light bulb on for 24 hours.",
    ],
    low: [
      "That’s like eating one steak... per week.",
      "Your emissions could cook 100 marshmallows every day.",
      "That’s about the same as driving 10 miles in a small car.",
    ],
    medium: [
      "That’s like driving 30 miles in a gas car every day.",
      "You could toast 500 marshmallows with that much carbon.",
      "Same as washing 50 loads of laundry (if you did it all today!).",
    ],
    high: [
      "That’s like releasing 200 party balloons every day!",
      "Enough to fly across your state twice a week.",
      "You could cook 100 grilled cheese sandwiches with this energy.",
    ],
    veryHigh: [
      "That’s like flying halfway across the U.S. every week!",
      "That’s like using an electric dryer nonstop for 24 hours.",
      "You emit more CO₂ daily than it takes to produce 30 lbs of beef.",
    ],
  };

  // Function to get the category based on CO₂ value (in grams per day)
  function getEmissionRange(value) {
    if (value <= 1000) return "veryLow";
    else if (value <= 4000) return "low";
    else if (value <= 9000) return "medium";
    else if (value <= 20000) return "high";
    else return "veryHigh";
  }

  // Function to get a random fun fact and display it
  function displayFunFact(totalEmissions) {
    var range = getEmissionRange(totalEmissions);
    var facts = emissionFacts[range];
    var randomFact = facts[Math.floor(Math.random() * facts.length)];
    return randomFact;
  }
  // Comparison displays here//
  var resultCompare = document.getElementById("result-compare");
  resultCompare.innerHTML = displayFunFact(totalEmissions);

  //Final message for each topic
  var resultSub = document.getElementById("result-dis");
  var finTransMessage =
    "<strong>Total Transportation Emissions:</strong> " +
    totalTransEmissions.toFixed(2) +
    "g CO₂<br>" +
    carMessage +
    "<br>" +
    walkBikeMessage;
  var finHouseMessage =
    "<strong>Total Housing Emissions: </strong>" +
    houseEmissions.toFixed(2) +
    " g CO₂<br>" +
    housemessage;
  var finFoodMessage =
    "<strong>Total Food Emissions:</strong>" +
    foodEmissions.toFixed(2) +
    "g CO₂<br>" +
    foodMessage;
  resultSub.innerHTML =
    finTransMessage + "<br>" + finHouseMessage + "<br>" + finFoodMessage;
}

document
  .getElementById("calc-button")
  .addEventListener("click", calculateEmissions);
