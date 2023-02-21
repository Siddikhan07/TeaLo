
function fun() {
    var no = document.getElementById("no").value;
    window.location.href = `/recipe.html?no=${no}`;
}
+no<br>+"sugar : "+no<br>+"chai patti : "+no<br>+"Elaichi : ";
function fun1() {
    let params = (new URL(document.location)).searchParams;
    let no = params.get("no");
    console.log(no);
    document.getElementById("recipe").innerHTML = "Milk : "+no+"<br/>Sugar : "+no+"<br/>Chai patti : "+no+"<br/>Elaichi : "+no;
}