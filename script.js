const learnButton = document.querySelector('.cta')
const main = document.querySelector('main')
const learnMoreButton1 = document.querySelector('#learnMore1')
const learnMoreButton2 = document.querySelector('#learnMore2')
const learnMoreButton3 = document.querySelector('#learnMore3')
const moreSection = document.querySelector('#learnMoreSection')
const moreInfo = document.querySelector('p.more-info')
const sideImg = document.querySelector('.sideImage')
const races = document.querySelector('#races')

learnButton.addEventListener('click', () => {
    main.hidden = !main.hidden
    if (!main.hidden) {
        learnButton.textContent = 'Hide'
        main.scrollIntoView({behavior: 'smooth'})
    } else {
        learnButton.textContent = 'Learn'
    }
})

learnMoreButton1.addEventListener('click', () => {
    moreSection.hidden = false
    races.hidden = false
    moreInfo.textContent = "On the track, that includes races like the mile, 3000m steeplechase, 5K, and 10K. In the fall, distance runners race cross country, which takes the sport off the track and onto grass, dirt, and hilly courses through parks and golf courses. Outside of school, road races range from local 5Ks all the way up to the marathon at 26.2 miles. What ties all of these events together is the training behind them: distance runners build their fitness through consistent mileage, long runs, and hard workouts that teach the body to hold a strong pace for as long as possible. It's a sport that rewards patience, smart pacing, and the willingness to keep pushing when your legs start to burn, and that's exactly what makes it so satisfying."
    sideImg.src = "track.jpg"
    sideImg.alt = "Just a stock image of a track."
    if (!moreSection.hidden) {
        moreInfo.scrollIntoView({behavior: 'smooth'})
    }
})

learnMoreButton2.addEventListener('click', () => {
    races.hidden = true
    moreSection.hidden = false
    moreInfo.textContent = "The benefits go far beyond the physical: a good run can clear your head, ease stress, and leave you feeling accomplished before most people have finished their morning coffee. Running also teaches you patience and discipline, because progress comes from showing up day after day, even when it's hard. Whether you want to race competitively, join a community of people who love the sport, or just find a quiet half hour to yourself, running has something to offer."
    sideImg.src = "womanRunning.jpg"
    sideImg.alt = "A stock image of a woman running."
    if (!moreSection.hidden) {
        moreInfo.scrollIntoView({behavior: 'smooth'})
    }
})

learnMoreButton3.addEventListener('click', () => {
    races.hidden = true
    moreSection.hidden = false
    moreInfo.textContent = "Some of my best conversations have happened mid-run, and the friendships I've built with my teammates through shared miles, tough workouts, and long bus rides to meets are some of the most meaningful in my life. I also love the feeling of seeing hard work pay off. There's nothing quite like crossing the finish line of a race and knowing that every early alarm and every tired step in training led to that moment. Running has taught me that progress doesn't happen overnight, but if you keep showing up, you'll surprise yourself with what you can do."
    sideImg.src = "teamRunning.jpg"
    sideImg.alt = "Me running with my teammates."
    if (!moreSection.hidden) {
        moreInfo.scrollIntoView({behavior: 'smooth'})
    }
})