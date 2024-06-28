document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const nameContentElement = document.getElementById('name-content');
    const interestsElement = document.getElementById('interests');
    const hobbiesElement = document.getElementById('hobbies');
    const emailLink = document.getElementById('email-link');
    const phoneLink = document.getElementById('phone-link');

    const userName = '[Your Name]';
    const userInterests = '[Your Interests]';
    const userHobbies = '[Your Hobbies/Activities]';
    const userEmail = 'your-email@example.com';
    const userPhone = '+1234567890';

    nameElement.textContent = userName;
    nameContentElement.textContent = userName;
    interestsElement.textContent = userInterests;
    hobbiesElement.textContent = userHobbies;
    emailLink.textContent = userEmail;
    emailLink.href = `mailto:${userEmail}`;
    phoneLink.textContent = userPhone;
    phoneLink.href = `tel:${userPhone}`;
});
