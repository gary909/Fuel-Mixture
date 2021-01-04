/*function to calculate amount of oil to add to Vespa Petrol.  You
need 2% oil for every litre of petrol*/

function twoPerCent(amount){
    mlVer = amount * 1000;
    if (amount > 1){
      return "2% of " + amount + " litres of petrol = " + mlVer / 100 * 2 + "ml.";
    } else {
      return "2% of " + amount + " litre of petrol = " + mlVer / 100 * 2 + "ml";
    }
  }
  
  console.log(twoPerCent(1))