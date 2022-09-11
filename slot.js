
function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}


document.getElementById("d3").onclick = function(){
    var user = ['第1個','第2個','第3個','第4個'];
    fisherYatesShuffle(user);
    document.getElementById("d4").innerHTML = user;
    }
