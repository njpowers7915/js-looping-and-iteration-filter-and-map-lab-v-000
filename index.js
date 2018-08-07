// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(i) {
    if (i.revenue > revenue) {
      return i;
    };
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newArr = driversWithRevenueOver(drivers, revenue);
  return newArr.map(function(i) {
    return i.name
  })
}

function exactMatch() {

}

function exactMatchToList() {

}
