
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];

    let resArr=matrix.map(function (item,index){
        if(index&1) return item.reverse();
        else return item;
    });

  return resArr.flat(1);
}
