function solve(nums, criteria){
    if (criteria === "asc"){
        return nums.sort((a, b) => a - b);
    }
    else if (criteria === "desc"){
        return nums.sort((a, b) => b - a);
    }
}