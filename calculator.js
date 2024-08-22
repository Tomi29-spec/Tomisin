function val(value){
    document.getElementById("answer").value +=value;
    return value;
}
function answer(){
    var ans = document.getElementById("answer").value
    var result = eval(ans)

    document.getElementById("answer").value = result
    return result
}
function clearAll(){
    document.getElementById("answer").value = "";
}