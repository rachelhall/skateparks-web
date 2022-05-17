export const users = [
  {
    handle: "willtrotman",
    name: "Will Trotman",
    profilePicture: "https://picsum.photos/500",
    bio: "Bio here",
    following: ["rachelhall", "nyjah", "grindylocks"],
    followers: ["rachelhall", "nyjah", "ryansheckler"],
    posts: [
      {
        created: 1650295825764,
        location: "Nashville",
        src: [
          "https://picsum.photos/700",
          "https://picsum.photos/500",
          "https://picsum.photos/600",
        ],
        caption:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos optio distinctio architecto cum, corporis accusamus. Laborum dolorem provident soluta esse at. Dicta assumenda aliquam commodi facilis voluptate odio accusantium quibusdam.",
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
    handle: "cbaby33",
    name: "Christian Wearsch",
    profilePicture: "https://picsum.photos/500",
    bio: "Just a cool Colorado guy with a little bit of attitude",
    following: ["willtrotman", "nyjah", "grindylocks", "skater301"],
    followers: ["willtrotman", "nyjah", "ryansheckler"],
    posts: [
      {
        created: 1650299825764,
        location: "Denver",
        src: [
          "https://picsum.photos/700",
          "https://picsum.photos/500",
          "https://picsum.photos/600",
          "https://picsum.photos/600",
          "https://picsum.photos/600",
        ],
        caption: "yoyoyo we chillin",
        likedBy: ["willtrotman", "ryansheckler", "nyjah", "grindylocks"],
        comments: [
          {
            user: "willtrotman",
            comment: "dude unreal kickflip",
          },
          {
            user: "skater301",
            comment: "this sucks",
          },
          { user: "grindylocks", comment: "yo yo yo" },
        ],
        savedBy: ["nyjah", "willtrotman", "grindylocks"],
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
        created: 1630195825764,
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
  // { handle: "ryansheckler", name: "Ryan Sheckler" },
  // { handle: "nyjah", name: "Nyjah Houston" },
  // { handle: "skater301", name: "Kevin Smith" },
  // { handle: "grindylocks", name: "Bob Jones" },
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
    comment: "Message",
  },
];

export const messages = [
  { user: "olliemckickflip", lastMessage: "sounds good peace" },
  { user: "nyjah", lastMessage: "Yo what's up" },
  { user: "user87", lastMessage: "GrindyLocks is sick" },
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
