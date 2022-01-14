function func (s, a, b){
const regex=/^$/;
const str=s.match(regex);
if(str){
    return -1;
}
var i=s.length-1;
var aIndex = -1;
var bIndex = -1;
while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    const newSubstr=s.substring(i, i+1);
    if ( newSubstr== a) {
    aIndex = i;
    }else{
        bIndex=i
    }
    i = i - 1;
    }
    function funcIndex(aIndex, bIndex){
if(bIndex==-1)  {
return aIndex;
}else{
    return Math.max(aIndex, bIndex);
}
}
let result=(bIndex!=-1)?bIndex:-1;
return result;
}