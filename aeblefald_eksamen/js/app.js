const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelectorAll(".content");
const section = document.querySelectorAll("section");
const image_container = document.querySelectorAll(".imgcontainer");


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  
  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });


  big_title.style.opacity = - scroll / (header_height / 5) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;

  content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
  image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;
})
 
window.onscroll =
function(){
    let blooper = document.getElementById("myVideo");

    if(blooper.getBoundingClientRect().bottom < 200 || blooper.getBoundingClientRect().top > 250)
        blooper.pause();
    else
    blooper.play();
}


/* Kontakt effekt*/ 

$("#contactForm").submit(function(event) 
{
    /* stop form from submitting normally */
    event.preventDefault();

    /* get some values from elements on the page: */
    var $form = $( this ),
        $submit = $form.find( 'button[type="submit"]' ),
        name_value = $form.find( 'input[name="name"]' ).val(),
        email_value = $form.find( 'input[name="email"]' ).val(),
        message_value = $form.find( 'textarea[name="message"]' ).val(),
        url = $form.attr('action');

    /* Send the data using post */
    var posting = $.post( url, { 
                      name: name_value, 
                      email: email_value, 
                      message: message_value 
                  });

    posting.done(function( data )
    {
        /* Put the results in a div */
        $( "#contactResponse" ).html(data);

        /* Change the button text. */
        $submit.text('Sendt, Tak!');

        /* Disable the button. */
        $submit.attr("disabled", true);
    });
});
