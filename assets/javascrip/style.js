// phần đăng kí 
const regishter = document.querySelector('.js-register')
const modal = document.querySelector('.modal')
const modalclose = document.querySelector('.js-black')
const notyfiRegishert = document.querySelectorAll('.js-registration-notice')
// veiets hàm mở đăng kí 
// mở đăng kí  
function showRegishter(){
    modal.classList.add('open')
}
regishter.addEventListener('click',showRegishter)
// đống
function hideRegishter(){
    modal.classList.remove('open')
}
modalclose.addEventListener('click',hideRegishter)

// for(const dki of regishter){
//     dki.addEventListener('click',showRegishter)
// } dùng khi là danh sách 
// dùng khi minh nó
// hàm khi nhấn đăng kí thông báo thánh công khi nhấn vào 3 nút nên dùng vòng for
for(const tb of notyfiRegishert){
    tb.addEventListener('click',notifi)
}
function notifi(){
    alert("Đăng Kí Thành Công ")
    modal.classList.remove('open')
}



// phần login
const login = document.querySelector('.js-login')
const modalLogin = document.querySelector('.modal-js-login')
const backLogin = document.querySelector('.js-back-login')
const notyfiLogin = document.querySelectorAll('.js-notify-login')
// mở login
function showLogin(){
    modalLogin.classList.add('open')
}
login.addEventListener('click',showLogin)
// đống
function coloseLogin(){
    modalLogin.classList.remove('open')
}
backLogin.addEventListener('click',coloseLogin)

// hàm thông báo khi đăng nhập thành công
// vòng lặp 3 nút đăng nhập

for(const loginSucces of notyfiLogin){
    loginSucces.addEventListener('click',notifiloginsuccess)
}
function notifiloginsuccess(){
    alert("Đăng Nhập Thành Công")
    modalLogin.classList.remove('open')
}

//phấn chuyển đối nếu nhấn vào trang đăng kí muốn mà muốn nhấn vao dăng nhập
const changeLogin = document.querySelector('.js-change-login')
function changeLogin1(){
    modal.classList.remove('open')
    modalLogin.classList.add('open')
}
changeLogin.addEventListener('click',changeLogin1)
//phấn chuyển đối nếu nhấn vào trang đăng nhập muốn mà muốn nhấn vao dăng kí
const changeregishi = document.querySelector('.js-change-regishin')
function change(){
    modalLogin.classList.remove('open')
    modal.classList.add('open')
}
changeregishi.addEventListener('click',change)
// phần đăng nhập đăng kí 
const userLogin = document.querySelector('.js-user-login')
const userLogin2 = document.querySelector('.js-user-login2')
const hide = document.querySelector('.js-hide-login-register')
const hide2 = document.querySelector('.js-hide-login-register2')
const user = document.querySelector('.js-show-user-login')
function hideuser(){
    hide.classList.add('hide')
    user.classList.add('show')
}
function hideuser1(){
    hide2.classList.add('hide-user-info')
}
// ẩn đăng nhập
userLogin.addEventListener('click',hideuser,)
userLogin2.addEventListener('click',hideuser1)

// phàn like sản phẩm  
const like = document.querySelector('.no-color-love')
const show_color_like = document.querySelector('.have-like')
const noLike = document.querySelector('.no-like')
function showLove(){
    show_color_like.classList.add('show_love')
    noLike.classList.add('show_not_love')
}
like.addEventListener('click',showLove)

// hàm nhấm bỏ like 
btnLike = document.querySelector('.has-color-love')
modalNolike = document.querySelector('.no-like')
modalLike = document.querySelector('.have-like')

function hideLike(){
    modalLike.classList.add('show_not_love1')
    modalNolike.classList.add('show_love1')
}
btnLike.addEventListener('click',hideLike)

// dodongf hồ dến ngược 

