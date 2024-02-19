// Define a type representing a shape with either a square or a circle
type Shape = Square | Circle;

// Define the Square type
type Square = {
    shapeType: 'square';
    sideLength: number;
};

// Define the Circle type
type Circle = {
    shapeType: 'circle';
    radius: number;
};

// Function to calculate area based on the shape
function calculateArea(shape: Shape): number {
    switch (shape.shapeType) {
        case 'square':
            return shape.sideLength ** 2;
        case 'circle':
            return Math.PI * shape.radius ** 2;
        default:
            // TypeScript infers the return type as never because this code should never be reached
            // This is helpful for catching unintended code paths at compile time
            const _exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape: ${JSON.stringify(shape)}`);
    }
}

// Define a square
const square: Square = {
    shapeType: 'square',
    sideLength: 5,
};

// Calculate area of the square
const squareArea = calculateArea(square);
console.log('Square area:', squareArea);

// Define a circle
const circle: Circle = {
    shapeType: 'circle',
    radius: 3,
};

// Calculate area of the circle
const circleArea = calculateArea(circle);
console.log('Circle area:', circleArea);

// This code demonstrates a deliberate error
// If a new shape type is added to the Shape union type without handling it in the switch statement,
// TypeScript will throw a compile-time error because the switch statement isn't exhaustive
const triangle: any = {
    shapeType: 'triangle',
    base: 4,
    height: 3,
};
// Uncommenting the following line will cause a compile-time error
// const triangleArea = calculateArea(triangle);
