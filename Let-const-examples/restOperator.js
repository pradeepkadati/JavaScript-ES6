const filter = (...args) =>{
    console.log(args.filter(el => el===1));
} 

filter(3,4,5,1);