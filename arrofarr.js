var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(typeof (a))
for (let i = 0; i < a.length; i++)
{
    console.log("row of  " + i);
    for (let j = 0; j < a[i].length; j++)
        console.log(a[i][j]);
}
var array = ['a', 'b', 'c', 'A', 'B', 'C', '(', ')', '+', '-', '~', '*'];
var character = array.join('')
    console.log(character)