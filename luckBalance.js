function luckBalance(k, contests) {
    if (contests.length === 0 || k < 0) {
        return 0; 
    }
    let luck = 0 ; 

    const important = contests.filter(item => item[1] === 1).sort((a, b) => b[0] - a[0]);  
    const uninportant = contests.filter(item => item[1] === 0)    
    
    // console.log(JSON.stringify(important))

    //max out your luck on the one that don't matter
    uninportant.forEach(item => {
        luck += item[0] ;
    });
    
    important.forEach(item => {
        if(k != 0){
           luck += item[0] ;
           k-- ;
        }
        else{
            luck -= item[0]
        }
    });
    
    return luck; 
    
}
