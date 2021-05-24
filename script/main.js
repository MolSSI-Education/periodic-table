function onElementClick() {
  let number = this.getAttribute('data-number')
  let element = window.tableData[number - 1]
  window.location = element.url

  return false
}

function getStarRank(count) {
  return Math.ceil(Math.min(count, 1000) / 200)
}

const colors = {
  404: '#ffffff',
  200: '#ed1c24ff',
}

function addElementToTable(data, tableDiv) {
  let elDiv = document.createElement('div')
  let symbol = document.createTextNode(data.symbol)

  elDiv.appendChild(symbol)
  elDiv.setAttribute('class', 'table-element')
  elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row};`)
  elDiv.setAttribute('data-number', data.number)
  elDiv.setAttribute('href', data.url)
  tableDiv.appendChild(elDiv)
  elDiv.addEventListener('click', onElementClick)
}

window.onload = () => {
  let tableDiv = document.querySelector('#periodic-table')

  window.tableData.forEach((e) => {
    addElementToTable(e, tableDiv)
  })
}
