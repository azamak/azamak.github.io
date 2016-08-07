$(document).ready(function () {

    $('#wel').click(function () {
    $('#wel').animate({paddingRight:'235px'},2000);

});
});


setTimeout(function () {
    $('#container').ready(function () {
        var contr=$('.controls');
        if(contr.text()=='Play'){
                 contr.click();
        }
});



},8000);
