import React from 'react'

export default function Randomquote() {

    let quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "In the tapestry of life, every thread has its purpose, and every knot its reason.",
        "Dreams are the whispers of the soul, urging us to listen and follow.",
        "The stars may be distant, but their light travels through time to remind us of our own potential.",
        "Embrace the chaos, for within it lies the seed of creation and the spark of innovation.",
        "A journey of a thousand miles begins with a single step, but it's the courage to keep walking that defines us.",
        "In the garden of life, kindness is the sunlight that helps all flowers bloom.",
        "Wisdom is not in knowing the answers, but in asking the right questions."
    ];

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const quote = quotes[randomIndex];

  return (
    <div>
      {quote}
    </div>
  )
}
