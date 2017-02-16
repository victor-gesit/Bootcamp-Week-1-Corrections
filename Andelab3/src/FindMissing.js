function FindMissing(){
	this.findMissing = function(arr1, arr2){
		arr1 = arr1.sort();
		var missing = 0;
		var found = null;
		for(var i = 0; i < arr2.length; i++){
			// binarySearch() returns the item if it is found.
			found = binarySearch(arr1, arr2[i]);
			if(found === null){
				missing = arr2[i];
				break;
			}
		}
		
		return missing;
		
	}
	// binarySearch is modified to return the item if it's found in the specified array.

	function binarySearch(list, item) {
   		let low = 0;
    	let high = list.length - 1;
  
  		while (low <= high) {
      		const mid = Math.round((low + high) / 2);
      		const guess = list[mid];
  
      		if (guess === item) {
        		return list[mid];
     		}
     		if (guess > item) {
       			high = mid - 1;
     		} else {
       			low = mid + 1;
    		}
   		}
   		// Return null if it's not found
   		return null;
 	}
}