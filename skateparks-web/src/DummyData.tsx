export const users = [
  {
    handle: "willtrotman",
    name: "Will Trotman",
    following: ["rachelhall", "nyjah", "grindylocks"],
    followers: ["rachelhall", "nyjah", "ryansheckler"],
    posts: [
      {
        location: "Nashville",
        src: ["https://picsum.photos/500", "https://picsum.photos/600"],
        likedBy: ["rachelhall", "ryansheckler", "nyjah", "grindylocks"],
        comments: [
          {
            user: "rachelhall",
            comment: "good stuff dude",
          },
          {
            user: "skater301",
            comment: "nice kickflip",
          },
          { user: "grindylocks", comment: "yo yo yo" },
        ],
        savedBy: ["nyjah", "skater301", "grindylocks"],
      },
    ],
  },
  {
    handle: "rachelhall",
    name: "Rachel Hall",
    following: ["willtrotman", "nyjah", "grindylocks", "ryansheckler"],
    followers: ["willtrotman", "grindylocks", "ryansheckler", "nyjah"],
    posts: [
      {
        location: "San Diego",
        src: ["https://picsum.photos/500", "https://picsum.photos/600"],
        likedBy: ["rachelhall", "ryansheckler", "nyjah", "grindylocks"],
        comments: [
          {
            user: "willtrotman",
            comment: "yooooooooooooo",
          },
          {
            user: "skater301",
            comment: "nice kickflip",
          },
          { user: "grindylocks", comment: "yo yo yo" },
        ],
        savedBy: ["nyjah", "skater301", "grindylocks"],
      },
    ],
  },
  { handle: "ryansheckler", name: "Ryan Sheckler" },
  { handle: "nyjah", name: "Nyjah Houston" },
  { handle: "skater301", name: "Kevin Smith" },
  { handle: "grindylocks", name: "Bob Jones" },
];

export const posts = [
  {
    user: "skater301",
    location: "Knoxville, TN",
    image: "./images/testpic.jpg",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut saepe assumenda odio nemo ducimus tempore accusamus! Enim, porro assumenda.",
  },
  {
    user: "skate19",
    location: "Nashville, TN",
    image: "./images/testpic2.jpg",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut saepe assumenda odio nemo ducimus tempore accusamus! Enim, porro assumenda.",
  },
  {
    user: "username3",
    location: "San Diego, CA",
    image: "./images/testpic.jpg",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut saepe assumenda odio nemo ducimus tempore accusamus! Enim, porro assumenda.",
  },
];

export const comments = [
  {
    user: "olliemckickflip",
    comment: "Dude I would love to kickflip that 7 stair",
  },
  {
    user: "nyjah",
    comment:
      "Hey man, Nyjah Houston here! Great content brother. Hope to see you at the park soon",
  },
  {
    user: "Rob Dyrdek",
    comment: "This isn't shit compared to my fantasy factory fuck you poser",
  },
];

export const messages = [
  { user: "olliemckickflip", lastMessage: "sounds good peace" },
  { user: "nyjah", lastMessage: "Yo what's up" },
  { user: "Rob Dyrdek", lastMessage: "My fantasy factory is better" },
  { user: "Donald Trump", lastMessage: "Have you seen my new tre flip video?" },
  {
    user: "Hillary Clinton",
    lastMessage: "Donald Trump can't tre flip for shit",
  },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
  { user: "Bernie Sanders", lastMessage: "I am the only true skater" },
];

export const ParkItemContent = [
  "https://picsum.photos/500",
  "https://picsum.photos/500",
  "https://picsum.photos/500",
  "https://picsum.photos/500",
  "https://picsum.photos/500",
  "https://picsum.photos/500",
];

export const ramps = [
  { type: "Mini Ramp", image: "https://picsum.photos/500" },
  { type: "Quarter Pipe", image: "https://picsum.photos/500" },
  { type: "Half Pipe", image: "https://picsum.photos/500" },
  { type: "Bowl", image: "https://picsum.photos/500" },
];

export const rails = [
  { type: "Round Rail", image: "https://picsum.photos/500" },
  { type: "Square Rail", image: "https://picsum.photos/500" },
  { type: "Down Rail", image: "https://picsum.photos/500" },
  { type: "Rainbow Rail", image: "https://picsum.photos/500" },
];
