function calculator() {
    var fir= +document.getElementById("firstNum").value ;
    var sec= +document.getElementById("secondNum").value ;
    var ope= document.getElementById("operation").value ;
    
    var result  = document.getElementById("result");
    switch(ope){
        case'+':        
        result= fir + sec;
        break;
        case'-':        
        result= fir - sec;
        break;
        case'*':        
        result= fir * sec;
        break;
        case'/':        
        result= fir / sec;
        break;
    }
    document.getElementById('result').innerHTML = result ;
    alert('THE RESULT IS : ' + result);
}