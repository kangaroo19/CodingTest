const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(v=>+v);
const n=input[0]
const dp=[1,2]
for(let i=2;i<=n;i++){
    dp[i]=(dp[i-1]+dp[i-2])%10007
}
console.log(dp[n-1])