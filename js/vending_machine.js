let url = "../vending_list.json"
let total_cash = 0
let dataSelect = ""
const loadData = () => {
    document.querySelector(".product_box").style.display = "none"
    document.querySelector(".product_select").style.display = "none"
    fetch(url)
        .then(function (response) {
            return response.json() // แปลงข้อมูลที่ได้เป็น json
        })
        .then(function (data) {
            // แสดงข้อมูล JSON จาก then ข้างบน
            for (snack of data.snack) {
                let SKdiv_tag = document.createElement("div")
                let SKimg_tag = document.createElement("img")
                let SKname_tag = document.createElement("p")
                let SKprice_tag = document.createElement("p")
                let SKname_text = document.createTextNode(snack.name)
                let SKprice_text = document.createTextNode(snack.price + " Baht")
                SKimg_tag.src = `img/vending_machine/snack/${snack.path_img}`
                SKimg_tag.alt = "snack_img"
                SKname_tag.appendChild(SKname_text)
                SKprice_tag.appendChild(SKprice_text)
                SKdiv_tag.id = snack.id
                SKdiv_tag.appendChild(SKimg_tag)
                SKdiv_tag.appendChild(SKname_tag)
                SKdiv_tag.appendChild(SKprice_tag)
                SKdiv_tag.setAttribute("onclick", "select(id)")
                document.querySelector("#snack_list").appendChild(SKdiv_tag)
                let SKMirror_div_tag = document.createElement("div")
                let SKMirror_img_tag = document.createElement("img")
                SKMirror_img_tag.src = `img/vending_machine/snack/${snack.path_img}`
                SKMirror_img_tag.alt = "Mirror_snack_img"
                SKMirror_div_tag.appendChild(SKMirror_img_tag)
                SKMirror_div_tag.style.borderBottom = "10px solid rgba(0, 0, 0, .5)"
                SKMirror_div_tag.style.display = "flex"
                SKMirror_div_tag.style.justifyContent = "center"
                SKMirror_div_tag.style.alignItems = "flex-end"
                document.querySelector(".machine_mirror").appendChild(SKMirror_div_tag)
            }
            for (bev of data.beverage) {
                let BEVdiv_tag = document.createElement("div")
                let BEVimg_tag = document.createElement("img")
                let BEVname_tag = document.createElement("p")
                let BEVprice_tag = document.createElement("p")
                let BEVname_text = document.createTextNode(bev.name)
                let BEVprice_text = document.createTextNode(bev.price + " Baht")
                BEVimg_tag.src = `img/vending_machine/beverage/${bev.path_img}`
                BEVimg_tag.alt = "bev_img"
                BEVname_tag.appendChild(BEVname_text)
                BEVprice_tag.appendChild(BEVprice_text)
                BEVdiv_tag.id = bev.id
                BEVdiv_tag.appendChild(BEVimg_tag)
                BEVdiv_tag.appendChild(BEVname_tag)
                BEVdiv_tag.appendChild(BEVprice_tag)
                BEVdiv_tag.setAttribute("onclick", "select(id)")
                document.querySelector("#bev_list").appendChild(BEVdiv_tag)
                let BEVMirror_div_tag = document.createElement("div")
                let BEVMirror_img_tag = document.createElement("img")
                BEVMirror_img_tag.src = `img/vending_machine/beverage/${bev.path_img}`
                BEVMirror_img_tag.alt = "Mirror_bev_img"
                BEVMirror_div_tag.appendChild(BEVMirror_img_tag)
                BEVMirror_div_tag.style.borderBottom = "10px solid rgba(0, 0, 0, .5)"
                BEVMirror_div_tag.style.display = "flex"
                BEVMirror_div_tag.style.justifyContent = "center"
                BEVMirror_div_tag.style.alignItems = "flex-end"
                document.querySelector(".machine_mirror").appendChild(BEVMirror_div_tag)
            }
        })
}
const start_btn = () => {
    document.querySelector(".start_box").style.display = "none"
    document.querySelector(".product_box").style.display = "block"
}

const select = async (e) => {
    // console.log(e);
    document.querySelector(".product_box").style.display = "none"
    document.querySelector(".product_select").style.display = "flex"
    await fetch(url)
        .then(function (response) {
            return response.json() // แปลงข้อมูลที่ได้เป็น json    
        })
        .then(function (data) {
            if (+e < 9) {
                console.log("sk",+e)
                dataSelect = data.snack.find(sk => sk.id === +e)
            } else {
                console.log("bev",+e)
                dataSelect = data.beverage.find(bev => bev.id === +e)
            }
        })
    let div_tag = document.createElement("div")
    let img_tag = document.createElement("img")
    let name_tag = document.createElement("h2")
    let price_tag = document.createElement("h2")
    let name_text = document.createTextNode(dataSelect.name)
    let price_text = document.createTextNode(dataSelect.price + " Baht")
    if(+e < 9){
        img_tag.src = `img/vending_machine/snack/${dataSelect.path_img}`
        img_tag.alt = "snack_preview"
    }else{
        img_tag.src = `img/vending_machine/beverage/${dataSelect.path_img}`
        img_tag.alt = "bev_preview"
    }
    name_tag.appendChild(name_text)
    price_tag.appendChild(price_text)
    div_tag.appendChild(img_tag)
    div_tag.appendChild(name_tag)
    div_tag.appendChild(price_tag)
    document.querySelector("#product_review").prepend(div_tag)
}
const addCash = (id) => {
    let cash = +id
    if (total_cash < dataSelect.price) {
        total_cash += cash
        document.querySelector("#total_baht").innerHTML = total_cash
        if (total_cash >= dataSelect.price) {
            let change = total_cash - dataSelect.price
            document.querySelector(".cash_list").style.display = "none"
            document.querySelector("#change_text").style.display = "block"
            document.querySelector("#change").innerHTML = change
            document.querySelector("#restart_btn").style.display = "block"
        }
    }
}