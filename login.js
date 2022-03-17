function login(){
    u1 = document.getElementById("username1").value;
    u2 = document.getElementById("username2").value;
    localStorage.setItem("u1",u1);
    localStorage.setItem("u2",u2);
    console.log(u1);
    console.log(u2);
    window.location = "index.html";
}
