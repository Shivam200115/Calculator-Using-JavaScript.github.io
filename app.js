function allClear(){
    document.getElementById("result").value=" ";
}

function display(val){
    document.getElementById("result").value += val;
    console.log("value insert sucessfully");
}

function equat(){
    let x=document.getElementById("result").value;
    if(x == ""){
     alert(" Firstly\n\n" + "Insert some value then calculate!");
    }
    else{
     let y = eval(x);
    document.getElementById("result").value = y;
    }
   
}