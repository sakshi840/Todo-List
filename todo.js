let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

// It will add items in ul lists..
function addItem(){
    let listItem = $('<li>', {
        'class' : 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputBtn()
}

// It will delete the done tasks..
function clearDone(){
    //console.log($('#ulTasks .done')) It will show the deleted element in the console..
   $('#ulTasks .done').remove()
   toggleInputBtn()
}

// It will sort the done task..
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
}

// function toggleInputBtn(valIsEmpty){
//     if(!valIsEmpty) {
//         btnReset.prop('disabled', false)
//         btnAdd.prop('disabled', false)
//     }
//     else {
//         btnReset.prop('disabled' , true)
//         btnAdd.prop('disabled' , true)
//     }
// }

// It is for enabling and disabling the buttons..
function toggleInputBtn(){
    btnReset.prop('disabled' , inpNewTask.val() == '' )
    btnAdd.prop('disabled' , inpNewTask.val() == '' )
    btnSort.prop('disabled' , ulTasks.children().length <1)
    btnCleanup.prop('disabled' , ulTasks.children().length <1)
}

inpNewTask.keypress((e) => {
    if(e.which == 13) addItem()
})
inpNewTask.on('input' , toggleInputBtn)

btnAdd.click(addItem)
btnReset.click(() => {
    inpNewTask.val('')
    toggleInputBtn()
})
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
