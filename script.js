function screen(input) {
    document.getElementById("display").value =  document.getElementById("display").value + input;

}

function screenclear(){
    document.getElementById("display").value = "";
}
function result(){
    var usr = document.getElementById("display").value
    document.getElementById("display").value = eval(usr)



}