for ( let i = 0; i < arr.length; i++ ) {
        let el = arr[i]
      
        if (el < smallest) {
            smallest = el
        }
    }
    return cb(smallest)
};