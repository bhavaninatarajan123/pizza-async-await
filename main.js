let stocks={
    choose:["veg","non-veg"],
    verity:["vegtables","chicken"],
    cheese:["need more","minimum level"],
    toppings:["mushrooms","chicken"]
}
let  shopopen=true;
function kitchen(ms){
    return new Promise ((resolve,reject)=>{
        if(shopopen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}

async function prepare(){

    try{
        await kitchen(2000)
        console.log("shop is opened");
        await kitchen(1000)
        console.log(`${stocks.choose[0]} was selected`);
        await kitchen(1000)
        console.log(`cooking is started`);
        await kitchen(2000)
        console.log(`vegtables has been chopped`);
        await kitchen(1000)
        console.log(`${stocks.verity[0]} was selected`);
        await kitchen(1000)
        console.log(`start the machine`);
        await kitchen(3000)
        console.log(`${stocks.cheese[0]}  cheese you selected`)
        await kitchen(3000)
        console.log(`pizza placed on the topping is  ${stocks.toppings[0]}`)
        await kitchen(2000)
        console.log(`serve pizza`)
    }

    catch(err){
        console.log("customer left")
    }
}
prepare()