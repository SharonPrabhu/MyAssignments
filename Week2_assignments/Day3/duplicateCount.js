let dup = [56,78,90,23,90,76,43,56]
dup.sort();
for(let i=0;i<dup.length;i++){
    if(dup[i]===dup[i+1]){
        console.log(dup[i])
    }
}