$('#button').click(async function(){
    const response = await fetch('expression.txt')
    const result = await response.text()
    const para = document.createElement("p");
    const node = document.createTextNode(result);
    para.appendChild(node);
    $('#div').append(para)
})
