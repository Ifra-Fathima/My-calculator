
var str="";
function pick(val)
{
    document.getElementById("inp").value += val;
}

function clearscreen(){
    document.getElementById("inp").value="";
}

function del(){
    var exp=document.getElementById("inp").value;
    var str=exp.substring(0,exp.length-1);
    document.getElementById("inp").value=str;
}

function result(){
    var exp=document.getElementById("inp").value;
    var final=eval(exp);
    document.getElementById("inp").value=final;
}

