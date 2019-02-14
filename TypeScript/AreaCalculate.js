var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return 3.14 * this.radius * this.radius;
    };
    Circle.prototype.toString = function () {
        console.log("Color is :" + this.color + " Area is :" + this.area());
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.toString = function () {
        console.log("Color is :" + this.color + " Area is :" + this.area());
    };
    return Rectangle;
}());
var circle = new Circle('Yellow', 4);
circle.toString();
var rectangle = new Rectangle('Red', 4, 4);
rectangle.toString();
