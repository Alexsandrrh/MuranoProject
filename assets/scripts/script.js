$(document).ready(function () {
    let checkbox1 = $('#check-1'),
        nameThing1 = $('#name-1'),
        imgThing1 = $('.icon-couch'),
        checkbox2 = $('#check-2'),
        nameThing2 = $('#name-2'),
        imgThing2 = $('.icon-armchair'),
        checkbox3 = $('#check-3'),
        nameThing3 = $('#name-3'),
        imgThing3 = $('.icon-double-bed'),
        checkbox4 = $('#check-4'),
        nameThing4 = $('#name-4'),
        imgThing4 = $('.icon-bar-stool'),
        checkbox5 = $('#check-5'),
        nameThing5 = $('#name-5'),
        imgThing5 = $('.icon-carpet'),
        checkbox6 = $('#check-6'),
        nameThing6 = $('#name-6'),
        imgThing6 = $('.icon-ottoman'),
        checkbox7 = $('#check-7'),
        nameThing7 = $('#name-7'),
        imgThing7 = $('.icon-kitchen');
    checkbox1.click(function () {
       imgThing1.toggleClass('-active');
       nameThing1.toggleClass('-active');
    });

    checkbox2.click(function () {
        imgThing2.toggleClass('-active');
        nameThing2.toggleClass('-active');
    });

    checkbox3.click(function () {
        imgThing3.toggleClass('-active');
        nameThing3.toggleClass('-active');
    });

    checkbox4.click(function () {
        imgThing4.toggleClass('-active');
        nameThing4.toggleClass('-active');
    });

    checkbox5.click(function () {
        imgThing5.toggleClass('-active');
        nameThing5.toggleClass('-active');
    });

    checkbox6.click(function () {
        imgThing6.toggleClass('-active');
        nameThing6.toggleClass('-active');
    });

    checkbox7.click(function () {
        imgThing7.toggleClass('-active');
        nameThing7.toggleClass('-active');
    });

//    INPUT NUMBER
    let minus = $('.icon-arrow-left'),
        plus = $('.icon-arrow-right');
    minus.click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    plus.click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        if ($input.val() == 100) {
            $input.val(1);
        }else {
            $input.change();
        }
        return false;
    });



});