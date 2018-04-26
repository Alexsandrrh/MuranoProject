$(document).ready(function () {
    //   ----------------------------
    $('.calc').change(function(){
        let chbox1 = $('#check-1'),
            selectVal1 = $('select#select-1').val(),
            number1 = $('#number-1').val();

        let chbox2 = $('#check-2'),
            selectVal2 = $('select#select-2').val(),
            number2 = $('#number-2').val();

        let chbox3 = $('#check-3'),
            selectVal3 = $('select#select-3').val(),
            number3 = $('#number-3').val();

        let chbox4 = $('#check-4'),
            selectVal4 = $('select#select-4').val(),
            number4 = $('#number-4').val();

        let chbox5 = $('#check-5'),
            selectVal5 = $('select#select-5').val(),
            number5 = $('#number-5').val();

        let chbox6 = $('#check-6'),
            selectVal6 = $('select#select-6').val(),
            number6 = $('#number-6').val();

        let chbox7 = $('#check-7'),
            selectVal7 = $('select#select-7').val(),
            number7 = $('#number-7').val();


        let sum1,
            sum2,
            sum3,
            sum4,
            sum5,
            sum6,
            sum7;
//   ------------------------
        if(chbox1.is(':checked')){
            sum1 = selectVal1 * number1;
        }else {
            sum1 = 0;
        }

        if(chbox2.is(':checked')){
            sum2 = 120 * number2;
        }else {
            sum2 = 0;
        }

        if(chbox3.is(':checked')){
            sum3 = selectVal3 * number3;
        }else {
            sum3 = 0;
        }

        if(chbox4.is(':checked')){
            sum4 = selectVal4 * number4;
        }else {
            sum4 = 0;
        }

        if(chbox5.is(':checked')){
            sum5 = selectVal5 * number5;
        }else {
            sum5 = 0;
        }

        if(chbox6.is(':checked')){
            sum6 = 100 * number6;
        }else {
            sum6 = 0;
        }

        if(chbox7.is(':checked')){
            sum7 = 600 * number7;
        }else {
            sum7 = 0;
        }
        let total = (sum1 + sum2 + sum3 + sum4 + sum5 + sum6 +sum7);
        let percent;
        if (total >= 12000) {
            percent = 85;
            total /= 100;
            total *= percent;
            $('.result-cash').text(total.toFixed());
            $('.result-discont').text(100 - percent);
        }else if (total >= 6000) {
            percent = 90;
            total /= 100;
            total *= percent;
            $('.result-cash').text(total.toFixed());
            $('.result-discont').text(100 - percent);
        }else if (total >= 1000) {
            percent = 95;
            total /= 100;
            total *= percent;
            $('.result-cash').text(total.toFixed());
            $('.result-discont').text(100 - percent);
        }else {
            $('.result-cash').text(total.toFixed());
        }
    });
});