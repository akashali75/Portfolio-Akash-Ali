$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");

        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

// slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });
// typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web App Developer", "Data Science Analyst", "Machine Learning Enthusiast", "Generative AI Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// Projects Section Interaction
document.querySelectorAll('.code-btn').forEach(button => {
    button.addEventListener('click', function() {
        const contactInfo = this.getAttribute('data-contact');
        document.getElementById('contactInfo').textContent = contactInfo;
        document.getElementById('contactModal').style.display = 'block';
    });
    button.setAttribute('data-contact', 
        "LinkedIn: linkedin.com/in/your-profile | " +
        "Email: akashali4670@gmail.com | " +
        "Discord: YourDiscord#1234");
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}