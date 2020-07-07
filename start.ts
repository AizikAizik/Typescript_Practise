function getMinimum(arr: Array<Number>){
    const max = Math.pow(2,31) - 1;
    let number = 0;

    let hash = {}

    arr.map((num:any) =>{
        if(!hash[num]){
            hash[num] = true
        }
    } )

    while(number <= max){
        if(!hash[number]){
            return number
        }
        number++
    }

}