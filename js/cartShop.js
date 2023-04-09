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
function removeItemInCart(x) {
    arrCart.splice(x, 1);
    localStorage.setItem("myCart", JSON.stringify(arrCart));
    console.log(arrCart);
    total = callTotal();
    renderCart(arrCart, total);
    renderSoLuongSanPham();
}
function callTotal() {
    var total = 0;
    arrCart.forEach(item => {
        total += item.Gia * item.quantity;
    })
    return total.toFixed(2);
}

function renderCart(arrCart) {
    var context = "";
    var cartContainer = document.querySelector("#tbCart");
    var subTotal = 0;
    var total = 0;
    if (arrCart.length > 0) {
        let strHeader = `  <tr>
            <td>Tên Sản Phẩm</td>
            <td>Hình Sản Phẩm</td>
            <td>Giá</td>
            <td>Số Lượng</td>
            <td>Thành Tiền</td>
            <td></td>
        </tr>
        `

            ;
        let strDaTa = "";
        arrCart.forEach((item, i) => {
            strDaTa += `<tr id=${i}>
                            <td>${item.Ten}</td>
                            <td>
                                <img src="/img/${item.hinh}.jpg" alt="" class="" width="100px" height="100px">
                            </td>
                            <td>${item.Gia}VNĐ</td>
                            <td>
                                <input type="number" name="txtQty" id="txtQty" min="1" style="width: 40%;" value="${item.quantity}" oninput="handleSoluongSanPhamOnClick(event,'${item.id}')">
                            </td>
                            <td>${item.Gia * item.quantity}</td>
                            <td>
                                <button onClick="removeItemInCart(${i})">Xóa</button>
                            </td>
                        </tr>`;
            context = strHeader + strDaTa;
            
        })
    } else {
        context = `<strong>Chưa Có Sản Phẩm Nào Trong Giỏ Hàng</strong>`
    }
    if (arrCart.length > 0) {
        subTotal = callTotal();
        total = ((subTotal + 150000) * 0.97).toFixed(3);
    }
    document.querySelector("#total").innerHTML = subTotal;
    document.querySelector("#totalll").innerHTML = total;
    cartContainer.innerHTML = context;

}

function renderSoLuongSanPham() {
    var soluong = 0;
    arrCart.forEach(item => {
        soluong += item.quantity;
    })
    document.querySelector(".cartNO").innerText = soluong;
    document.querySelector(".total-sl").innerText = soluong;

}

function handleSoluongSanPhamOnClick(event, itemId) {
    let newInput = Number(event.target.value);
    // Lap trong arrCart neu ma id = item ID thi thay quality = 
    for (let index = 0; index < arrCart.length; index++) {
        const product = arrCart[index];
        if (product.id === itemId) {
            product.quantity = newInput;
            break
        }
    }
    localStorage.setItem("myCart", JSON.stringify(arrCart));
    renderSoLuongSanPham();
    renderCart(arrCart, total);
}


function paypal() {
    if (arrCart.length > 0) {
        alert("thành công");
    }else{
    alert("Không Có Sản Phẩm nào trong giỏ hàng");
    }
}


