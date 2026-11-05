import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } 
    from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const greetingEl = document.getElementById("user-greeting");
const loginLink = document.querySelector("a.login");

onAuthStateChanged(auth, (user) => {
    if (user) {
        // Đã đăng nhập
        localStorage.setItem("aka_current_user", JSON.stringify({
            uid: user.uid,
            name: user.displayName || "",
            email: user.email
        }));

        if (greetingEl) {
            const name = user.displayName || user.email;
            greetingEl.innerHTML = `Xin chào, <strong></strong>`;
            greetingEl.querySelector("strong").textContent = name;
        }
        if (loginLink) {
            loginLink.textContent = "Đăng xuất";
            loginLink.href = "#";
            loginLink.onclick = async (e) => {
                e.preventDefault();
                await signOut(auth);
                localStorage.removeItem("aka_current_user");
                window.location.reload();
            };
        }
    } else {
        // Chưa đăng nhập
        localStorage.removeItem("aka_current_user");
        if (greetingEl) greetingEl.innerHTML = "";
        if (loginLink) {
            loginLink.textContent = "Đăng nhập";
            loginLink.href = "login.html";
            loginLink.onclick = () => {
                localStorage.setItem("redirectAfterLogin", window.location.href);
            };
        }
    }

    // Báo cho giỏ hàng cập nhật theo tài khoản
    window.dispatchEvent(new Event("aka-auth-changed"));
});