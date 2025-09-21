document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const rememberMe = document.getElementById('remember').checked;

    const users = [
        { username: "Bless",password: "1q2w3e4r", page: "Bless.html" },
        { username: "Divine",password: "Baseman", page: "Divine.html" },
        { username: "Lala",password: "Latasha",  page: "Lala.html" },
        { username: "Joy",password: "12tek778",   page: "Joy.html" },
        { username: "Langu",password: "Mabaso",    page: "Langu.html" },
        { username: "Nhluvuko",password: "LUNAR",    page: "Nhluvuko.html" },
        { username: "Khanyisile",password: "032327",    page: "Ntsongo.html" },
        { username: "Risuna",password: "246810",    page: "Risuna.html" },
        { username: "Mbuso",password: "Mbuso",    page: "Mbuso.html" },
        { username: "Vutomi",password: "VutomiLee",    page: "Vutomi.html" },
        { username: "Lulama",password: "Khanyi2203",   page: "Lulama.html" }
    ];

    const matchedUser = users.find(user => user.username === username && user.password === password);

    if (matchedUser) {
        alert("Login successful!");
        if (rememberMe) {
            localStorage.setItem("username", username);
        }
        window.location.href = matchedUser.page;
    } else {
        alert("Invalid username or password");
    }
});

window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("remember").checked = true;
    }
};