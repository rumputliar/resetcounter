<div id="counter"></div>
<button id="reset">Reset</button>
 
<script>
var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);
 
document.getElementById('counter').innerHTML = n;
 
 
function reset_counter() {
    localStorage.removeItem('on_load_counter');
}
 
document.getElementById('reset').addEventListener('click', reset_counter);
</script>