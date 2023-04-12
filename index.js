const ratingContainer = document.querySelector('.rating-card');
const thankYouContainer = document.querySelector('.thank-you-card');
const submitRatingBtn = document.querySelector('.rating-submit');
const rating = document.querySelectorAll('.rating-btn');
const rateAgain = document.getElementById('rate-again');
const selectedRating = document.getElementById('rating')

submitRatingBtn.addEventListener('click', () => {
    ratingContainer.style.display = "none"
    thankYouContainer.classList.remove('hidden')

    rating.forEach((rating) => {
        rating.addEventListener('click', () => {
            rating.classList.toggle('selected')
            selectedRating.innerHTML = rating.innerHTML
        })
    })
})

rateAgain.addEventListener('click', () => {
    ratingContainer.style.display = "block"
    thankYouContainer.classList.add('hidden')
})