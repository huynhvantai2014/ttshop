// let sp = {
//     ma: "sp01", hinh: "p1", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "52990000"
// };

const products = [
    { id: "sp01", hinh: "P1", GT: "Nữ", Ten: "Giày Thể Thao Nữ", Gia: "32990000" },
    { id: "sp02", hinh: "P2", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "32990000" },
    { id: "sp03", hinh: "P3", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "52990000" },
    { id: "sp04", hinh: "P4", GT: "Nữ", Ten: "Giày Thể Thao Nữ", Gia: "32990000" },
    { id: "sp05", hinh: "P5", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "52990000" },
    { id: "sp06", hinh: "P3", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "52990000" },
    { id: "sp07", hinh: "P4", GT: "Nữ", Ten: "Giày Thể Thao Nữ", Gia: "32990000" },
    { id: "sp08", hinh: "P5", GT: "Nam", Ten: "Giày Thể Thao Nam", Gia: "52990000" }
];
var str = "";
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    str += ` <li>
    <div class="product-item">
        <div class="product-top">
            <a href="#!" class="product-thumd">
                <img src="/img/${product.hinh}.jpg" alt="">
            </a>
            <a href="#!" class="buy-now" onclick="addCart('${product.id}')"> Mua Ngay</a>
        </div>
        <div class="product-info">
            <a href="#!" class="product-cat">${product.GT}</a>
            <a href="#!" class="product-name">${product.Ten}</a>
            <div class="product-price">${product.Gia}VND</div>
        </div>
    </div>
    </li>`;

}

document.querySelector(".products").innerHTML = str;
let soluong = localStorage.getItem("totalQty");
if (soluong == null) {
    soluong == 0;
}
document.querySelector(".cartNO").innerText = soluong;
//  == undefined)?0:localStorage.getItem("totalQty");
let arrCart = localStorage.getItem("myCart");
if (arrCart == null) {
    arrCart = [];

} else {
    arrCart = JSON.parse(localStorage.getItem("myCart"));
}
console.log(soluong);
renderSoLuongSanPham();

function addCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('myCart')) || [];
    let product = products.find(product => product.id === productId);
    let index = -1;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id == product.id) {
            index = i;
            break;
        }
    }


    if (index == -1) {
        let newItem = { ...product, quantity: 1 };
        cartItems.push(newItem);
    } else {
        cartItems[index].quantity++;
    }

    document.querySelector(".cartNO").innerText = soluong;
    localStorage.setItem("totalQty", soluong + "");
    localStorage.setItem("myCart", JSON.stringify(cartItems));
    renderSoLuongSanPham();
}


function showCart() {
    location.href = "cartshop.html";
}

function renderSoLuongSanPham() {
    var soluong = 0;
    let cartItems = JSON.parse(localStorage.getItem('myCart')) || [];
    cartItems.forEach(item => {
        soluong += item.quantity;
    })
    document.querySelector(".cartNO").innerText = soluong;
    // document.querySelector(".total-sl").innerText = soluong;

}

