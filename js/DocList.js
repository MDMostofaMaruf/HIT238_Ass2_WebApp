var myArray = [
    {'name':'Dr Nirmala Godavitharana', 'ava':'Available from: Mon, 28/9'},
    {'name':'Dr Sofia Mir', 'ava':'Available from: Mon, 28/9'},
    {'name':'Dr Kalinga (Karl) Herath', 'ava':'Available from: Mon, 28/9'},
    {'name':'Dr (Bandi) Watogla Samarasena', 'ava':'Available from: Mon, 28/9'},
    {'name':'Tim', 'ava':'Available from: Mon, 28/9'},
    {'name':'Erik', 'ava':'Available from: Mon, 28/9' },
]

$('#search-input').on('keyup', function(){
                      
                      var value =$(this).val()
console.log(value);
    var data= searchTable(value,myArray)
    buildTable(data)
                      })


buildTable(myArray)


    
    function searchTable(value,data){
        var filteredData=[]
        for(var i=0;i<data.length; i++){
            value=value.toLocaleLowerCase()
            var name = data[i].name.toLocaleLowerCase()
            if (name.includes(value)){
                
                filteredData.push(data[i])
            }
            
        }
        return filteredData
    }

   

 $('th').on('click', function(){
     var column = $(this).data('colname')
     var order = $(this).data('order')
     var text = $(this).html()
     text = text.substring(0, text.length - 1);
     
     
     
     if (order == 'desc'){
        myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
     }else{
        myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
     }

    $(this).html(text)
    buildTable(myArray)
    })

 
    
function buildTable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        var colname = `name-${i}`
        var colage = `ava-${i}`
        var colbirth = `birth-${i}`

        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].ava}</td>
                       
                   </tr>`
        table.innerHTML += row
    }
}
