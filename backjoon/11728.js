const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=Number(nums[0].shift())
const m=Number(nums[0].shift())
const array1=nums[1].splice(0,n)
const array2=nums[2].splice(0,m)
for(let i=0;i<m;i++){
    array1.push(array2[i])
}

array1.sort((a,b)=>a-b)
console.log(array1.join(" "))
