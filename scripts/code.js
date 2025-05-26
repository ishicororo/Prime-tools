const codeVariables={
    codeText:document.getElementById("code_text"),
    codeKey:document.getElementById("code_key"),
}
function execute(){
    let string=codeVariables.codeText.value;
    let key=codeVariables.codeKey.value;
    const encoder=new TextEncoder();
    const decoder=new TextDecoder();
    console.log(encoder.encode(string));
    console.log(encoder.encode(key));

}