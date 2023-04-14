function calcularPercentual(faturamentoMensal) {
  const faturamentoMensalTotal = faturamentoMensal.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.valor
    },
    0
  )
  return faturamentoMensal.map(element => {
    return {
      estado: element.estado,
      valor: (element.valor / faturamentoMensalTotal) * 100
    }
  })
}

const faturamentoMensalJson = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'Outros', valor: 19849.53 }
]

const resultado = calcularPercentual(faturamentoMensalJson)

resultado.forEach(element => {
  console.log('O estado de:', element.estado,'representa', element.valor, '% do faturamento mensal')
})


