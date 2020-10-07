var myTable = document.getElementById('myTable')

myTable.addEventListener('click', function(evt){
  if(evt.target.closest('.deleteRow')) {
    evt.target.closest('tr').remove()
  }
})

