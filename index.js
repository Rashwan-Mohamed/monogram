let ham = document.querySelector('.ham');
let aside = document.querySelector('aside');
let close = document.querySelector('.close');
let modal = document.querySelector('.modal-overlay');
let content = document.querySelectorAll('.content');
let pseudo = document.querySelector(".psudo");
ham.addEventListener('click', (e) => {
    aside.classList.toggle('gor');
    modal.classList.remove("disable");
    document.querySelector('body').style.overflowY = 'hidden';


})

close.addEventListener('click', () => {

    aside.classList.add('gor');
    modal.classList.add("disable");
    document.querySelector('body').style.overflowY = 'scroll';

})

document.querySelector('body').addEventListener('click', (e) => {




    if ((e.target == aside || aside.contains(e.target) || (e.target == ham || ham.contains(e.target))) == false) {

        if (!aside.classList.contains('gor')) {
            modal.classList.add("disable");
            aside.classList.add('gor');
            document.querySelector('body').style.overflowY = 'scroll';

        }

    }

    if ((e.target == pseudo || pseudo.contains(e.target)) == false) {

        pseudo.querySelector('.virtual').classList.add('disable');

    }


})


window.addEventListener('resize', () => {

    if (this.window.innerWidth > '790') {
        aside.classList.add('gor');
        modal.classList.add("disable");
        document.querySelector('body').style.overflowY = 'scroll';

    }



})



content.forEach((item) => {




    item.addEventListener('mouseenter', (e) => {

        if (e.target.querySelectorAll('.mego')[1] != undefined) {
            e.target.querySelectorAll('.mego')[0].classList.add('disable');
            e.target.querySelectorAll('.mego')[1].classList.remove('disable');
            removeIt();
        }




    })


    function removeIt() {


        item.querySelectorAll('.mego')[1].addEventListener('mouseout', (e) => {



            e.target.parentNode.querySelectorAll('.mego')[0].classList.remove('disable');
            e.target.parentNode.querySelectorAll('.mego')[1].classList.add('disable');


        })


    }



});


pseudo.addEventListener('click', () => {

    pseudo.querySelector('.virtual').classList.toggle('disable');


})