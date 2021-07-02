const inputSplitter = input => {
  const number = input.match(/[.\d/]+/g) || ['1']
  const string = input.match(/[a-zA-Z]+/g)[0]

  return [number[0], string]
}

const checkDivision = fraction => {
  const numbers = fraction.split('/')

  if (numbers.length > 2) {
    return false
  }

  return numbers
}

function ConvertHandler() {
  
  this.getNum = function(input) { 
    let result = inputSplitter(input)[0]
    const numbers = checkDivision(result)

    if (!numbers) {
      return undefined
    }

    const num1 = numbers[0]
    const num2 = numbers[1] || 1

    if (isNaN(num1) || isNaN(num2)) {
      return undefined
    }

    result = parseFloat(num1) / parseFloat(num2)

    return result;
  };
  
  this.getUnit = function(input) {
    let result = inputSplitter(input)[1].toLowerCase()
    
    switch (result) {
      case 'gal':
        return 'gal'
      case 'l':
        return 'L'
      case 'km':
        return 'km'
      case 'mi':
        return 'mi'
      case 'lbs':
        return 'lbs'
      case 'kg':
        return 'kg'
      default:
        return undefined
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    const unit = initUnit.toLowerCase()

    switch (unit) {
      case 'gal':
        return 'L'
      case 'l':
        return 'gal'
      case 'km':
        return 'mi'
      case 'mi':
        return 'km'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      default:
        return undefined
    }
  };

  this.spellOutUnit = function(unit) {    
    switch (unit) {
      case 'gal':
        return 'gallons'
      case 'L':
        return 'liters'
      case 'km':
        return 'kilometers'
      case 'mi':
        return 'miles'
      case 'lbs':
        return 'pounds'
      case 'kg':
        return 'kilograms'
      default:
        return "don't know"
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const unit = initUnit.toLowerCase()
    let result;

    switch(unit) {
      case 'gal':
        result = initNum * galToL
        break
      case 'l':
        result = initNum / galToL
        break
        case 'lbs':
          result = initNum * lbsToKg
          break
        case 'kg':
          result = initNum / lbsToKg
          break
        case 'mi':
          result = initNum * miToKm
          break
      case 'km':
        result = initNum / miToKm
        break
      default:
        break
    }
    
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
