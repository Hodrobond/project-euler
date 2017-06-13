/*
Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

export function getSolution(){
  var numPaths = [];
  var getLattices = function (width, height) {
      numPaths[width] = numPaths[width] || []

      if (numPaths[width][height]) {
          return numPaths[width][height];
      }
      if (width == 0 || height == 0) return 1;

      //Consider moving to the right
      var routes = getLattices(width-1, height);
      routes += getLattices(width, height - 1);

      numPaths[width][height] = routes;

      return routes;
  };
  return getLattices(20,20);
}
