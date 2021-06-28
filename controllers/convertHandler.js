function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.replace(/[A-Za-z]/g, '')
    result = parseInt(result)
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.replace(/\d/g, '')
    result = result.toLowerCase()
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result

    switch (initUnit) {
      case 'gal':
        result = 'L'
        break
      case 'L':
        result = 'gal'
        break
      case 'km':
        result = 'mi'
        break
      case 'mi':
        result = 'km'
        break
      case 'lbs':
        result = 'kg'
        break
      case 'kg':
        result = 'lbs'
        break
      default:
        result = 'invalid unit'
        break
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    switch (unit) {
      case 'gal':
        result = 'gallons'
        break
      case 'L':
        result = 'liters'
        break
      case 'km':
        result = 'kilometers'
        break
      case 'mi':
        result = 'miles'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = kilograms
        break
      default:
        result = 'invalid unit'
        break
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
