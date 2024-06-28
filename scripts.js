$(document).ready(function() {
    const name = '[Your Name]';
    const interests = '[Your Interests]';
    const hobbies = '[Your Hobbies/Activities]';
    const email = 'your-email@example.com';
    const phone = '+1234567890';

    $('#name').text(name);
    $('#name-content').text(name);
    $('#interests').text(interests);
    $('#hobbies').text(hobbies);
    $('#email-link').text(email).attr('href', `mailto:${email}`);
    $('#phone-link').text(phone).attr('href', `tel:${phone}`);

    $(window).scroll(function() {
        $('.section').each(function() {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() / 1.5) {
                $(this).find('.animate__animated').addClass('animate__fadeIn');
            }
        });
    });
});
