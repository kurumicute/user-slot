
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
    fisherYatesShuffle(user);
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    document.getElementById("d4").innerHTML = user;
    if (name.value.length == 0){
        document.getElementById("d4").innerHTML ="沒有輸入名字";
    }
    else if (a == true) {
        document.getElementById("d4").innerHTML = "我不信你名字裡有英文字母";
    }
    else if (b == true) {
        document.getElementById("d4").innerHTML = "ok,數字人是吧";
    }
    else{
        document.getElementById("d4").innerHTML = user;
    }
    }