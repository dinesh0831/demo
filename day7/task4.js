class uber{
    constructor(distance){
        this.distance=distance;

    }
    setDistance(distance){
        this.distance=distance;
    }
    getPrice(){
        console.log(this.distance*11)
    }
}
var price=new uber(10);
price.setDistance(20);
price.getPrice()
