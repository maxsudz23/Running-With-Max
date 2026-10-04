const learnButton = document.querySelector('.cta')
const moreContent = document.querySelector('#more-content')

learnButton.addEventListener('click', () => {
    moreContent.hidden = !moreContent.hidden;
    if (!moreContent.hidden) {
        learnButton.textContent = 'Hide'
        moreContent.scrollIntoView({behavior: 'smooth'})
    } else {
        learnButton.textContent = 'Learn';
    }
})