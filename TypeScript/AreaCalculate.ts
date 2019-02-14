interface shape{

    color : string;
    area():number;
    toString();
}
class Circle implements shape{

  color :string
  radius :number

  constructor(color :string,radius :number)
  {
      this.color = color;
      this.radius = radius;
  }

  area() : number {
      return 3.14 * this.radius * this.radius;
 }

 toString(){
     console.log("Circle Color is :"+this.color+ " Area is :"+this.area());
 }
}


class Rectangle implements shape{

    color :string
    width :number
    height :number
  
    constructor(color :string,width :number,height:number)
    {
        this.color = color;
        this.width = width;
        this.height = height;
    }
  
    area() : number {
        return this.width * this.height 
   }
  
   toString(){
       console.log("Rectangle Color is :"+this.color+ ". Area is :"+this.area());
   }
  }
var circle = new Circle('Yellow',4)
circle.toString();

var rectangle = new Rectangle('Red',4,4)
rectangle.toString();