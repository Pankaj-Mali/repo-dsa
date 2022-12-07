/*
Q.1 Create a function that takes a number as an input and returns the
number in words( without using third-party packages).
Range 1-1000(both number inclcusive)
For example
Input -555 Output - FIve hundred and fifty five
Input -560 Output - FIve hundred and sixty

*/

let num=37

function numToLet(num){
let digit=["zero","one" , "two", 'three','four','five','six','seven','eight','nine']
let des=['nun','ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninty']
let oneDes=['twenty','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',"eighteen","nineteen"]
let hund="hundred"

if(num===1000){
    return "one thound"
}else if(num<10){
    return digit[num]
}else if(num === 10){
    return 'Ten'
}else if(num>10 && num<21){
    return oneDes[num%10]
}else if(num>=21){
    let res=''
    num=num.toString()
   let arr=num.split('');
   if (num.length==2){

    let d=parseInt(arr[1])
    let t=parseInt(arr[0])
    if (d==0){
        return des[t]
    }else {
        res= des[t]+" "+digit[d]
        return res
    }

   }else if (num.length==3){

    let d=parseInt(arr[2])
    let t=parseInt(arr[1])
    let h=parseInt(arr[0])

    if(d==0 && t==0 ){
        return digit[h]+" "+hund
    }else if(t==0){
        res=digit[h]+" "+ hund+" "+"and"+ " " +digit[d] ;
        return res
    }else if(d==0){
        res=digit[h]+" "+ hund+" "+"and"+ " " +des[t] 
        return res

    }else if(num>110 && num<120){

        let d=parseInt(arr[2])
        let t=parseInt(arr[1])
        let h=parseInt(arr[0])

        res=digit[h]+" "+ hund+" "+"and"+ " " +oneDes[d] 
       
        return res

    }
    
    else{
        res=digit[h]+" "+ hund+" "+"and"+ " " + des[t]+ " "+ digit[d]
        return res
    }

   }
  
}





}

console.log(numToLet(num))