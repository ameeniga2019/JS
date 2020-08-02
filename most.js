var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4,3, 3,9];
function mfreq(a) {
    var mf = 1;
    var item = 0;
    for (let i = 0, m = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) 
            if (a[i] ==a[j])
                m++;
        if (mf<m)
        { mf = m;   item = a[i];}
        m = 0;    
    }
    console.log('most frequent' + item)
}
mfreq(arr1);