

function kvadrat(){
    var kv = document.getElementById('kv')
    var W = document.getElementById('width').value 
    var H = document.getElementById('height').value
    var border = document.getElementById('border').value
    var bg = document.getElementById('bg').value
    var br = document.getElementById('br').value
    var bc = document.getElementById('bc').value
    var bs = document.getElementById('bs').value
    var txt = document.getElementById('txt').value
    var fs = document.getElementById('fs').value
    var fc = document.getElementById('fc').value


    kv.style.width = W
    kv.style.height = H
    kv.style.border = border
    kv.style.backgroundColor = bg
    kv.style.borderRadius = br
    kv.style.borderColor = bc
    kv.style.boxShadow = bs
    kv.innerHTML = txt
    kv.style.fontSize = fs
    kv.style.color = fc
}