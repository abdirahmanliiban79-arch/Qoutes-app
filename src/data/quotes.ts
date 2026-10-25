import type { Quote } from "@/types/quote";

// Public-domain works, proverbs, and original QuoteSpace lines (author "QuoteSpace").
export const quotes: readonly Quote[] = [
  // Motivation
  { id: "mot-01", category: "Motivation", author: "Lao Tzu", text: "The journey of a thousand miles begins with a single step." },
  { id: "mot-02", category: "Motivation", author: "Japanese Proverb", text: "Fall seven times, stand up eight." },
  { id: "mot-03", category: "Motivation", author: "Seneca", text: "It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult." },
  { id: "mot-04", category: "Motivation", author: "Virgil", text: "Fortune favors the bold." },
  { id: "mot-05", category: "Motivation", author: "Thomas Edison", text: "Genius is one percent inspiration and ninety-nine percent perspiration." },
  { id: "mot-06", category: "Motivation", author: "Ralph Waldo Emerson", text: "Nothing great was ever achieved without enthusiasm." },
  { id: "mot-07", category: "Motivation", author: "Benjamin Franklin", text: "Dost thou love life? Then do not squander time, for that is the stuff life is made of." },
  { id: "mot-08", category: "Motivation", author: "Franklin D. Roosevelt", text: "The only thing we have to fear is fear itself." },
  { id: "mot-09", category: "Motivation", author: "QuoteSpace", text: "Start where you are. Small steps, repeated daily, outrun big plans that never begin." },

  // Life
  { id: "lif-01", category: "Life", author: "Socrates", text: "The unexamined life is not worth living." },
  { id: "lif-02", category: "Life", author: "Seneca", text: "It is not that we have a short time to live, but that we waste a lot of it." },
  { id: "lif-03", category: "Life", author: "Henry David Thoreau", text: "Live in each season as it passes; breathe the air, drink the drink, taste the fruit." },
  { id: "lif-04", category: "Life", author: "William Shakespeare", text: "All the world's a stage, and all the men and women merely players." },
  { id: "lif-05", category: "Life", author: "Walt Whitman", text: "I am large, I contain multitudes." },
  { id: "lif-06", category: "Life", author: "Søren Kierkegaard", text: "Life can only be understood backwards; but it must be lived forwards." },
  { id: "lif-07", category: "Life", author: "William Shakespeare", text: "We are such stuff as dreams are made on, and our little life is rounded with a sleep." },
  { id: "lif-08", category: "Life", author: "QuoteSpace", text: "Ordinary days are the quiet architecture of a remarkable life." },

  // Success
  { id: "suc-01", category: "Success", author: "Booker T. Washington", text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome." },
  { id: "suc-02", category: "Success", author: "Benjamin Franklin", text: "Diligence is the mother of good luck." },
  { id: "suc-03", category: "Success", author: "Aesop", text: "Slow and steady wins the race." },
  { id: "suc-04", category: "Success", author: "English Proverb", text: "A smooth sea never made a skilled sailor." },
  { id: "suc-05", category: "Success", author: "Oliver Goldsmith", text: "Our greatest glory is not in never falling, but in rising every time we fall." },
  { id: "suc-06", category: "Success", author: "Thomas Carlyle", text: "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: it is this that distinguishes the strong soul from the weak." },
  { id: "suc-07", category: "Success", author: "Abraham Lincoln", text: "Always bear in mind that your own resolution to succeed is more important than any other one thing." },
  { id: "suc-08", category: "Success", author: "QuoteSpace", text: "Success is rarely loud. It is usually a quiet habit kept long enough to matter." },
  { id: "suc-09", category: "Success", author: "QuoteSpace", text: "Measure progress by the person you are becoming, not only by the goals you have reached." },

  // Wisdom
  { id: "wis-01", category: "Wisdom", author: "Lao Tzu", text: "Knowing others is intelligence; knowing yourself is true wisdom." },
  { id: "wis-02", category: "Wisdom", author: "Confucius", text: "He who learns but does not think is lost. He who thinks but does not learn is in great danger." },
  { id: "wis-03", category: "Wisdom", author: "Epictetus", text: "No man is free who is not master of himself." },
  { id: "wis-04", category: "Wisdom", author: "Marcus Aurelius", text: "The soul becomes dyed with the color of its thoughts." },
  { id: "wis-05", category: "Wisdom", author: "Seneca", text: "We suffer more often in imagination than in reality." },
  { id: "wis-06", category: "Wisdom", author: "Francis Bacon", text: "Knowledge itself is power." },
  { id: "wis-07", category: "Wisdom", author: "Plato", text: "The beginning is the most important part of the work." },
  { id: "wis-08", category: "Wisdom", author: "Ralph Waldo Emerson", text: "Whoso would be a man must be a nonconformist." },
  { id: "wis-09", category: "Wisdom", author: "Lao Tzu", text: "He who knows that enough is enough will always have enough." },

  // Happiness
  { id: "hap-01", category: "Happiness", author: "Marcus Aurelius", text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking." },
  { id: "hap-02", category: "Happiness", author: "Epicurus", text: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for." },
  { id: "hap-03", category: "Happiness", author: "Jane Austen", text: "There is no charm equal to tenderness of heart." },
  { id: "hap-04", category: "Happiness", author: "The Dhammapada", text: "Health is the greatest gift, contentment the greatest wealth." },
  { id: "hap-05", category: "Happiness", author: "Mark Twain", text: "Grief can take care of itself, but to get the full value of a joy you must have somebody to divide it with." },
  { id: "hap-06", category: "Happiness", author: "QuoteSpace", text: "Joy is often hiding in the small, unscheduled moments." },
  { id: "hap-07", category: "Happiness", author: "QuoteSpace", text: "Gratitude turns what you have into enough." },
  { id: "hap-08", category: "Happiness", author: "QuoteSpace", text: "Happiness grows when attention rests on what is already here." },

  // Growth
  { id: "gro-01", category: "Growth", author: "Robert Louis Stevenson", text: "To be what we are, and to become what we are capable of becoming, is the only end of life." },
  { id: "gro-02", category: "Growth", author: "Ralph Waldo Emerson", text: "Every artist was first an amateur." },
  { id: "gro-03", category: "Growth", author: "Walt Whitman", text: "Re-examine all you have been told, and dismiss whatever insults your own soul." },
  { id: "gro-04", category: "Growth", author: "Lao Tzu", text: "Mastering others is strength; mastering yourself is true power." },
  { id: "gro-05", category: "Growth", author: "Proverb", text: "The best time to plant a tree was twenty years ago. The second best time is now." },
  { id: "gro-06", category: "Growth", author: "Henry David Thoreau", text: "Things do not change; we change." },
  { id: "gro-07", category: "Growth", author: "QuoteSpace", text: "Growth is uncomfortable because it asks you to become someone you haven't met yet." },
  { id: "gro-08", category: "Growth", author: "QuoteSpace", text: "Learn something small every day; the years will turn it into mastery." },

  // Friendship
  { id: "fri-01", category: "Friendship", author: "Aristotle", text: "What is a friend? A single soul dwelling in two bodies." },
  { id: "fri-02", category: "Friendship", author: "Ralph Waldo Emerson", text: "The only way to have a friend is to be one." },
  { id: "fri-03", category: "Friendship", author: "Cicero", text: "Friendship is the only thing in the world concerning the usefulness of which all mankind are agreed." },
  { id: "fri-04", category: "Friendship", author: "Seneca", text: "Nothing, to my thinking, is pleasanter than to have someone to whom you can speak as you would to yourself." },
  { id: "fri-05", category: "Friendship", author: "William Shakespeare", text: "Those friends thou hast, and their adoption tried, grapple them to thy soul with hoops of steel." },
  { id: "fri-06", category: "Friendship", author: "Jane Austen", text: "Friendship is certainly the finest balm for the pangs of disappointed love." },
  { id: "fri-07", category: "Friendship", author: "English Proverb", text: "A friend in need is a friend indeed." },
  { id: "fri-08", category: "Friendship", author: "QuoteSpace", text: "A good friend is a quiet place to be yourself." },
  { id: "fri-09", category: "Friendship", author: "QuoteSpace", text: "Show up, listen well, and stay kind." },

  // Love
  { id: "lov-01", category: "Love", author: "William Shakespeare", text: "Love looks not with the eyes, but with the mind." },
  { id: "lov-02", category: "Love", author: "William Shakespeare", text: "The course of true love never did run smooth." },
  { id: "lov-03", category: "Love", author: "Elizabeth Barrett Browning", text: "How do I love thee? Let me count the ways." },
  { id: "lov-04", category: "Love", author: "Jane Austen", text: "You must allow me to tell you how ardently I admire and love you." },
  { id: "lov-05", category: "Love", author: "Alfred, Lord Tennyson", text: "'Tis better to have loved and lost than never to have loved at all." },
  { id: "lov-06", category: "Love", author: "Robert Browning", text: "Grow old along with me! The best is yet to be." },
  { id: "lov-07", category: "Love", author: "Emily Dickinson", text: "That Love is all there is, is all we know of Love." },
  { id: "lov-08", category: "Love", author: "1 Corinthians 13", text: "Love is patient, love is kind." },
  { id: "lov-09", category: "Love", author: "QuoteSpace", text: "Love is mostly attention, offered again and again." },
];
