function seach (arr, seach) {
    if (seach == arr[0]) {
        console.log(arr[0]);
    } else if (arr.length & 1) {
        console.log(arr.length);
        var arr = arr.slice(1, arr.length);
        console.log(arr);
    }

    var aa = 0,
        ab = (arr.length/2)-1,
        bb = arr.length/2,
        ba = arr.length - 1;
    
    console.log(aa, ab, bb , ba);

};
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
seach(a);




