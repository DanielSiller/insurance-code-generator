# insurance-code-generator
Code to generate insurance registration number

## How to use
```js
const generateCodInsu = require('@danielsiller/insurance-code-generator')

// All parameters must be of type String

const codEmp = '8' // Registration Company Code
const number = '23437' // Document number - Ex: CT-e
const model = '57' // Model - SEFAZ (57-CTe ou 55-NFe ou 99-Others)
const serie = '889' // Document serie
const cnpj = '09526131000181' // CNPJ Issuer of the document
const SUSEP = '00000' // Insurance SUSEP code with the verification digit
const dateApolice = '1217' // Month/Year of Policy Effectiveness

const code = generateCodInsu({
  codEmpAverb: codEmp,
  numberDoc: number,
  modelDoc: model,
  serieDoc: serie,
  cnpjEmp: cnpj,
  SUSEPseg: SUSEP,
  InsurancePolicy: dateApolice
})

console.log({
  status: 'success',
  cod: code
})
```
Result:
```js
  { 
    status: 'success',
    cod: '0000012170952613100018157889000023437866'
  }
```

