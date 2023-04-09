let arrCart = JSON.parse(localStorage.getItem("myCart"))
console.log(arrCart);
renderCart(arrCart, total);
renderSoLuongSanPham();
// function showDetail(arrCart) {
//     for (let i = 0; i< arrCart.length; i++) {
//         console.log(arrCart);
//     }
// }
// showDetail(arrCart);
// function removeItemInCart(x) {
//     arrCart.splice(x, 1);
//     localStorage.setItem("myCart", JSON.stringify(arrCart));
//     console.log(arrCart);
//     total = callTotal();
//     renderCart(arrCart, total);
//     renderSoLuongSanPham();
// }
// function callTotal() {
//     var total = 0;
//     arrCart.forEach(item => {
//         total += item.Gia * item.quantity;
//     })
//     return total.toFixed(2);
// }

function renderCart(arrCart) {
    var context = "";
    var cartContainer = document.querySelector(".table");
    var subTotal = 0;
    var total = 0;
    if (arrCart.length > 0) {
        let strDaTa = "";
        for (let i = 0; i < arrCart.length; i++) {
            let item = arrCart[i];
            strDaTa += ` <div class="cart-container">
            <div class="img-sibar">
                <img src="/img/${item.hinh}.jpg" alt="Hinh san pham" id="main-img">
                <p>
                    <img src="img/P1.jpg" alt="">
                    <img src="img/P2.jpg" alt="">
                    <img src="img/P3.jpg" alt="">
                    <img src="img/P4.jpg" alt="">
                </p>
            </div>
            <div class="content">
                <div class="h3">
                    <p>${item.Ten} Biti's Hunter X Midnight EZ-STRAP DSWH07600DEN </p>
                </div>
                <div class="pro_pice">
                    <span>${item.Gia} <del style="color: #9c9c9c;">1.929.000đ</del></span>
                </div>
                <div class="five_star">
                    <p><img src="./img/icon/star_77949.png" alt="">
                        <img src="./img/icon/star_77949.png" alt="">
                        <img src="./img/icon/star_77949.png" alt="">
                        <img src="./img/icon/star_77949.png" alt="">
                        <img src="./img/icon/star_77949.png" alt="">
                        <a href="#!">(15 đánh giá )</a>
                    </p>
                </div>
                <div class="status">
                    Tình trạng: <a href="#!"> Còn Hàng(20)</a>
                </div>

                <div class="free_ship">Free Ship Toàn Quốc</div>
                <div class="size">
                    36<input type="radio" name="size" id="">
                    37<input type="radio" name="size" id="">
                    38<input type="radio" name="size" id="">
                    39<input type="radio" name="size" id="">
                    40<input type="radio" name="size" id="">
                    41<input type="radio" name="size" id="">
                    42<input type="radio" name="size" id="">
                </div>
                <input type="number" name="txtQty" id="txtQty" min="1" style="width: 40%;" value="${item.quantity}" oninput="handleSoluongSanPhamOnClick(event,'${item.id}')">
            </div>
        </div>
        
        <div id="total">

        </div>
        <div class="pay-pal"></div>`;
                        
            context = strDaTa;
            break;
        }
    } else {
        context = `<p>Chưa Có Sản Phẩm Nào Trong Giỏ Hàng</p>`
    }

    document.querySelector("#total").innerHTML = subTotal;
    // document.querySelector("#totalll").innerHTML = total;
    cartContainer.innerHTML = context;

}
function renderSoLuongSanPham() {
    var soluong = 0;
    arrCart.forEach(item => {
        soluong += item.quantity;
    })
    document.querySelector(".cartNO").innerText = soluong;
    // document.querySelector(".total-sl").innerText = soluong;

}

function showCart() {
    location.href = "cartshop.html";
}

var silecart = document.querySelectorAll('.cart-container>.img-sibar>p>img');
for (let i = 0; i < silecart.length; i++) {
    silecart[i].onclick = function(){
        // alert(this.src);
        var maining = document.querySelector('.img-sibar>#main-img');
        maining.src = this.src;
    }

}

