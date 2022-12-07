function check(){
    var other = document.getElementById("othervalue");
    other.style.display = check ? "" : "none";
};

function kiemtra(){
    var code = document.getElementById("code");
    if (code.value.length==0){
        alert("Không được để trống mã sinh viên!")
        return false;
    }

    var name = document.getElementById("name");
    if (name.value.length==0){
        alert("Không được để trống tên sinh viên!")
        return false;
    }

    var email = document.getElementById("email");
    if (email.value.length==0){
        alert("Không được để trống email!")
        return false;
    }

    var gioitinh = document.getElementsByName("gioi_tinh");
    if(!gioitinh[0].checked&& !gioitinh[1].checked){
        alert("Chưa chọn giới tính!");
        return false;
    }

    var checkBoxes = document.getElementsByClassName( 'myCheckBox' );
    var isChecked = false;
        for (var i = 0; i < checkBoxes.length; i++) {
            if ( checkBoxes[i].checked ) {
                isChecked = true;
            };
        };
        if ( !isChecked ) {
            alert( 'Hãy chọn ít nhất 1 sở thích!' );
            return false;
    }

    var quoctich = document.getElementById("quoctich");
    if(quoctich.value.length==0){
        alert("Hãy chọn quốc tịch!");
        return false;
    }
    alert("Đăng ký thành công");
    return true;
}
