// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(i) {
    if (i.revenue > revenue) {
      return i;
    };
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.map(function(i) {
    const newArr = [];
    if (i.revenue > revenue) {
      newArr.push(i.name);
    };
    return newArr
  });
}

function exactMatch() {

}

function exactMatchToList() {

}
