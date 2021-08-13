interface Props {
  codEmpAverb: string;
  numberDoc: string;
  modelDoc: string;
  serieDoc: string;
  cnpjEmp: string;
  susepSeg: string;
  insurancePolicy: string;
}


module.exports = function generateCodInsu({ codEmpAverb, numberDoc, modelDoc, serieDoc, cnpjEmp, susepSeg, insurancePolicy }: Props) {
  try {
    const codEmp = codEmpAverb.padStart(1, '0')
    const number = numberDoc.padStart(9, '0').split('')
    const model = modelDoc.split('')
    const serie = serieDoc.padStart(3, '0').split('')
    const cnpj = cnpjEmp.padStart(14, '0')
    const SUSEP = susepSeg.padStart(5, '0').split('')
    const apolice = insurancePolicy.split('')
    var cnpjInvertido = cnpj.split('').reverse()

    var numberAverbAux: string[] = []
    numberAverbAux = numberAverbAux.concat(codEmp, number, model, serie, cnpjInvertido, SUSEP, apolice)

    var numberWeight = generateWeight(numberAverbAux)
    var digitValidate = generateDigitValidate(numberAverbAux, numberWeight)

    numberAverbAux.push(digitValidate)

    numberWeight = generateWeight(numberAverbAux)
    digitValidate += generateDigitValidate(numberAverbAux, numberWeight)

    var numberAverb: string[] = []
    numberAverb = numberAverb.concat(SUSEP, apolice, cnpjEmp, model, serie, number, codEmp, digitValidate)

    return numberAverb.join('')
  } catch (err) {
    return err
  }
}

function generateWeight(numberAverb: string[]) {
  const weight = []
  var number = 0
  for (let i = 0; i < numberAverb.length; i++) {
    ++number
    if (number == 10) {
      number = 1
    }
    weight.push(String(number))
  }
  weight.reverse()
  return weight
}

function generateDigitValidate(numberAverb: string[], numberWeight: string[]) {
  var sum = 0

  for (let i = 0; i < numberAverb.length; i++) {
    sum += Number(numberWeight[i]) * Number(numberAverb[i])
  }
  const rest = sum % 11
  let digitValidate = ''

  if (rest < 2) {
    digitValidate = '0'
  } else {
    digitValidate = String(11 - rest)
  }

  return digitValidate
}