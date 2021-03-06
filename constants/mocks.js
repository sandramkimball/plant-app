const categories = [
    {
        id: 'plants',
        name: 'Plants',
        tags: ['products', 'inspirations'],
        count: 147,
        image: require('../assets/images/plants.png')
    },
    {
        id: 'seeds',
        name: 'Seeds',
        tags: ['products', 'shop'],
        count: 17,
        image: require('../assets/images/seeds.png')
    },
    {
        id: 'flowers',
        name: 'Flowers',
        tags: ['products', 'inspirations'],
        count: 68,
        image: require('../assets/images/flowers.png')
    },
    {
        id: 'sprayers',
        name: 'Sprayers',
        tags: ['products', 'shop'],
        count: 68,
        image: require('../assets/images/sprayers.png')
    },
    {
        id: 'pots',
        name: 'Pots',
        tags: ['products', 'shop'],
        count: 47,
        image: require('../assets/images/pots.png')
    },
    {
        id: 'fertilizers',
        name: 'Fertilizers',
        tags: ['products', 'shop'],
        count: 50,
        image: require('../assets/images/fertilizers.png')
    }
]

const products = [    
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
]

const explore = [
    require("../assets/images/explore_1.png"),
    require("../assets/images/explore_2.png"),
    require("../assets/images/explore_3.png")
]

const profile = {
    name: 'Pandy Blossom',
    location: 'USA',
    email: 'panda6@panda.com',
    budget='900',
    cap='950',
    avatar: require('../assets/images/flowers.png'),
    notifications: true,
    newsletter: false
}

export { categories, products, explore, profile };