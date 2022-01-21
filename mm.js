const message1 = ["All our dreams can come true,", "The secret of getting ahead,",
 "Don’t limit yourself. Many people limit themselves to what they think they can do.",
 "The best time to plant a tree was 20 years ago.", "I wake up every morning and think to myself,",
 "If people are doubting how far you can go,", "The same boiling water that softens the potato hardens the egg.",
 "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes",
 "If we have the attitude that it’s going to be a great day,", "Magic is believing in yourself.",
 "If something is important enough,", "Hold the vision,", "No one is to blame for your future situation but yourself.",
 "Things may come to those who wait,", "We are what we repeatedly do.", "If you’re offered a seat on a rocket ship,",
 "It’s not the load that breaks you down,", "One day or day one.", "Whatever You are,", "Happiness is not something ready made.",
 "Do what you feel in your heart to be right,"
]

const message2 = [" it’s the way you carry it.", " don’t ask what seat! Just get on.", " Excellence, then, is not an act, but a habit.",
" but only the things left by those who hustle.", " If you want to be successful, then become 'Successful.'", " You decide.",
" trust the process.", " even if the odds are stacked against you, you should still do it.", " be a good one.",
" If you can make that happen, you can make anything happen.", " it usually is.", " It’s what you’re made of. Not the circumstances.",
" It comes from your own actions.", " for you’ll be criticized anyway.",
" understanding that failure is not the opposite of success, it’s part of success.", " go so far that you can’t hear them anymore.",
" The second best time is now."
]

const randomMessage = (arr1, arr2) => {
    return arr1[Math.floor(Math.random() * arr1.length -1)] + arr2[Math.floor(Math.random() * arr2.length -1)]
}

console.log(randomMessage(message1, message2));