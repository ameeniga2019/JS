function year(y) {
    if (y / 4 != 0)
        return false;
    else {
        if (y / 400 == 0 && y/400) return true;
        else
            return false
    }
  
}

console.log(year(1800))