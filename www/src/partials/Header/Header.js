document.addEventListener('DOMContentLoaded', function (event) {
const btn = document.getElementById('test');
btn.onclick = async () => {
    const res = await fetch('php/test.php');
    const json = await res.json();
    alert(json.b);
}
});