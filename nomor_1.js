// masukkan string
let string = "kasur ini rusak"
// declare variabel
let bol=true

// check is string palindrome or not
for(let i=0;i<string.length/2;i++){
    // if not then bol to false not palindrome
    if(string[i]!==string[string.length-1-i]){
        //not palindrome
        bol=false
    }
}

// if palindrome print out data and "banyak palindrome"
if(bol){
    let datas = string.split(" ")
    let count=datas.length
    console.log("banyak palindrome:",count)
    console.log(datas[0])
    // let count = datas.map(data => count++)
}else{
// else not palindrome
    console.log("bukan palindrome")
}