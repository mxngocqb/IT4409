let info = {
  name: "Mai Xuân Ngọc",
  sex: "Nam",
  ethnicity: "Kinh",
  email: "ngoc.mx204769@sis.hust.edu.vn",
  religion: "Không",
  granduatedYear: "Không có dữ liệu",
  address: "XÃ MAI HÓA, HUYỆN TUYÊN HÓA, TỈNH QUẢNG BÌNH",
  highschoolName:"THPT PHAN BỘI CHÂU, HUYỆN TUYÊN HÓA, TỈNH QUẢNG BÌNH",
  household: "XÃ MAI HÓA, HUYỆN TUYÊN HÓA, TỈNH QUẢNG BÌNH",
  idCardNumber: "044***37",
  phoneNumber: "037***37",
  issuedBy: "TỈNH QUẢNG BÌNH",
  mother: {
    name: "TRẦN THỊ ANH",
    dob: "1977",
    job: "LÀM RUỘNG",
    phoneNumber: "094***46",
    email: "TTR*@*IL.COM"
  },
  father: {
    name: "MAI XUÂN HẠNH",
    dob: "1973",
    job: "LÀM RUỘNG",
    phoneNumber: "084***54",
    email: "MX*@*IL.COM"
  }
}


const render = (info) => {
    document.querySelector('.name').innerText = info.name
    document.querySelector('.navbar-name').innerText = info.name
    document.querySelector('.sex').innerText = info.sex
    document.querySelector('.religion').innerText = info.religion
    document.querySelector('.highschool-name').innerText = info.highschoolName
    document.querySelector('.phone-number').innerText = info.phoneNumber
    document.querySelector('.household').innerText = info.household
    document.querySelector('.email').innerText = info.email
    document.querySelector('.ethnicity').innerText = info.ethnicity
    document.querySelector('.granduated-year').innerText = info.granduatedYear
    document.querySelector('.address').innerText = info.address
    document.querySelector('.id-number').innerText = info.idCardNumber
    document.querySelector('.issued-by').innerText = info.issuedBy
    document.querySelector('.father-name').innerText = info.father.name
    document.querySelector('.father-dob').innerText = info.father.dob
    document.querySelector('.father-job').innerText = info.father.job
    document.querySelector('.father-phone-number').innerText = info.father.phoneNumber
    document.querySelector('.father-email').innerText = info.father.email
    document.querySelector('.mother-name').innerText = info.mother.name
    document.querySelector('.mother-dob').innerText = info.mother.dob
    document.querySelector('.mother-job').innerText = info.mother.job
    document.querySelector('.mother-phone-number').innerText = info.mother.phoneNumber
    document.querySelector('.mother-email').innerText = info.mother.email
}

const localData = JSON.parse(localStorage.getItem('data'))
if(localData) render(localData)
else render(info)