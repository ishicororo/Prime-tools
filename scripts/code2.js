const codeVariables={
    codeText:document.getElementById("code_text"),
    codeKey:document.getElementById("code_key"),
    codeResult:document.getElementById("code_result"),
}
function execute(){
     const stringUnit8Array=[];
     const keyUnit8Array=[];
     let correspondenceTable=[[0,0]];
     let finalStringBinaryArarry={
          index:[],
          body:[],
     };
     for(let key of codeVariables.codeKey.value.split("")){
        keyUnit8Array.push(key.codePointAt(0));
     }
     for(char of codeVariables.codeText.value.split("")){
        stringUnit8Array.push(char.codePointAt(0));
     }
     for(let i=0;i<keyUnit8Array.length;i++){
          for(let j=Math.floor(1114111/keyUnit8Array.length)*i,k=keyUnit8Array[i];j<=Math.floor(1114111/keyUnit8Array.length)*(i+1);j++,k=foundation.nextPrime(k,1)){
               correspondenceTable.push([i,keyUnit8Array[i]+k]);
          }
     }
}
function returnCode(){
}