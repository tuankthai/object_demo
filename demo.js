const shoe1 = {
    brand: "nike",
    laces: true,
    velcro: false,
    color: "orange",
    price: 149,
    activityType: "skate boarding"

}

const shoe2 = {
    brand: "new balance",
    laces: true,
    velcro: false,
    color: "black",
    price: 349,
    activityType: "outdoor"

}

const shoe3 = {
    brand: "Hoka",
    laces: true,
    velcro: false,
    color: "green",
    price: 349,
    activityType: "running",
    "test-key": "test key",
    showFact() {
        console.log(`this show is for ${this.activityType}, and it is ${this.color}`)
        console.log(this.activityType)
        console.log("this is a good product")
        console.log("it protects feet")
        return true;
    }

}



const inventory = [shoe1, shoe2];
// console.log(inventory);

inventory.push(shoe3)

// console.log(inventory);
console.log(shoe3.color)
console.log(shoe3['price'])
console.log(shoe3["test-key"])
console.log(shoe3.showFact())

//add properties dynamically
console.log(shoe3)
shoe3.size = 10
shoe3.testFunc = function test() { console.log("test function") }
shoe3.color = "pink"



// console.log(shoe3.testFunc())

// delete properties
delete shoe3.showFact

console.log(shoe3)

//loop thru every property in object
for (item in shoe3) {
    //only 
    console.log(`${item} : ${shoe3[item]}`)     //have to be in []

}

console.log(Object.keys(shoe3))  //print all key names


for (let i = 0; i < Object.values(shoe3).length; i++) {
    console.log(Object.values(shoe3)[i])
}


