const painting = function () {
    console.log("The wall has been painted red")
};

painting();

const painting = function (colour) {
    console.log("The wall has been painted " + colour)
};

painting("green");
painting("purple");

const painting = function (item) {
    console.log("the " + item + "wall has been painted black");
    console.log("the other wall has been painted" + item);
};
const wall = "north";
const colour = "pink";

painting(wall);
painting(colour);