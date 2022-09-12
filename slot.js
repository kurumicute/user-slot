
function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}

document.getElementById("d3").onclick = function(){
    var user = ['第1個','第2個','第3個','第4個'];
    var name = document.getElementById("t1")
    var a = /^[a-zA-Z()]+$/.test(name.value);
    var b = /^[1-9()]+$/.test(name.value);
    var c = /^[1-9a-zA-Z()]+$/.test(name.value);
    var d = /^[\u4E00-\u9FA5]+$/.test(name.value);
    fisherYatesShuffle(user);
    document.getElementById("d4").innerHTML = user;
    if (name.value.length == 0){
        document.getElementById("d4").innerHTML ="沒有輸入名字";
    }
    else if (a == true) {
        document.getElementById("d4").innerHTML = "我不信你名字是用英文";
    }
    else if (b == true) {
        document.getElementById("d4").innerHTML = "真•數字人";
    }
    else if (c == true){
        document.getElementById("d4").innerHTML = "我不覺得英文和數字可以組出名字";
    }
    else if (d == true){
        document.getElementById("d4").innerHTML = user;
    }
    else {
        document.getElementById("d4").innerHTML = "我不知道，可能有人名字不會打";
    }
    }