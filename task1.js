function task1(N,M,magicNumbers){
  for(let i=1;i<=N;i++){
    let isMultiple =false;
    let str = "";
    for(let key in magicNumbers){
      if(i%key === 0){
        isMultiple = true;
        str+=magicNumbers[key];
      }
    }
console.log(str);
    if(!isMultiple)
      console.log(i);
       str="";
  }
}

task1(6,2,{2: 'idli', 3: 'sambar'});
