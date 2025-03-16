import { Country, Clue } from '@/types/game';

export const countries: Country[] = [
  {
    "name": "France",
    "code": "FR",
    "capital": "Paris",
    "latitude": 46.2276,
    "longitude": 2.2137,
    "continent": "Europe",
    "population": 67391582
  },
  {
    "name": "Japan",
    "code": "JP",
    "capital": "Tokyo",
    "latitude": 36.2048,
    "longitude": 138.2529,
    "continent": "Asia",
    "population": 125800000
  },
  {
    "name": "United States",
    "code": "US",
    "capital": "Washington, D.C.",
    "latitude": 37.0902,
    "longitude": -95.7129,
    "continent": "North America",
    "population": 331893745
  },
  {
    "name": "Brazil",
    "code": "BR",
    "capital": "Brasília",
    "latitude": -14.235,
    "longitude": -51.9253,
    "continent": "South America",
    "population": 215313498
  },
  {
    "name": "Australia",
    "code": "AU",
    "capital": "Canberra",
    "latitude": -25.2744,
    "longitude": 133.7751,
    "continent": "Oceania",
    "population": 26000000
  },
  {
    "name": "India",
    "code": "IN",
    "capital": "New Delhi",
    "latitude": 20.5937,
    "longitude": 78.9629,
    "continent": "Asia",
    "population": 1400000000
  },
  {
    "name": "Germany",
    "code": "DE",
    "capital": "Berlin",
    "latitude": 51.1657,
    "longitude": 10.4515,
    "continent": "Europe",
    "population": 83200000
  },
  {
    "name": "South Africa",
    "code": "ZA",
    "capital": "Pretoria",
    "latitude": -30.5595,
    "longitude": 22.9375,
    "continent": "Africa",
    "population": 60000000
  },
  {
    "name": "Mexico",
    "code": "MX",
    "capital": "Mexico City",
    "latitude": 23.6345,
    "longitude": -102.5528,
    "continent": "North America",
    "population": 126000000
  }
];

export const countryClues: Record<string, Clue[]> = {
  "FR": [
    {
      "id": 1,
      "text": "This country has over 1,500 different types of cheese",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Home to the world's most visited museum",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Known for its fashion industry and haute couture",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Famous for its wine regions like Bordeaux and Champagne",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "Has the highest mountain in Western Europe",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Its capital city is known as the City of Light",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "Home to the Palace of Versailles",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "The national motto is Liberté, Égalité, Fraternité",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Has a famous tower built for the 1889 World's Fair",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country is shaped like a hexagon",
      "difficulty": 10
    }
  ],
  "JP": [
    {
      "id": 1,
      "text": "Home to Mount Fuji, an iconic active volcano",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Has the busiest train station in the world",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Consists of over 6,800 islands",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Famous for its cherry blossom festivals",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "Exports high-quality sushi and seafood worldwide",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Known for its anime and manga industry",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag is a white background with a red circle",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "Has the world's oldest continuously operating company",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Home to the world's busiest pedestrian crossing",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country hosted the 2020 Summer Olympics",
      "difficulty": 10
    }
  ],
  "US": [
    {
      "id": 1,
      "text": "The third most populous country in the world",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Has the longest river system in North America",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Shares the longest international border with Canada",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains the Grand Canyon, one of the Seven Natural Wonders",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "Largest producer of Hollywood films",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Birthplace of fast food chains like McDonald's and KFC",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag has 50 stars and 13 stripes",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "First country to land humans on the moon",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Home to Silicon Valley, the tech capital of the world",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "Has the world's largest economy",
      "difficulty": 10
    }
  ],
  "BR": [
    {
      "id": 1,
      "text": "Home to the Amazon Rainforest, the largest in the world",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Has the world's most famous Carnival festival",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Borders every South American country except Chile and Ecuador",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains the Pantanal, the world's largest tropical wetland",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "The largest exporter of coffee in the world",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Football (soccer) is the most popular sport here",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag is green with a yellow diamond",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "The only Portuguese-speaking country in South America",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Hosted the FIFA World Cup in 2014",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country is home to the Christ the Redeemer statue",
      "difficulty": 10
    }
  ],
  "AU": [
    {
      "id": 1,
      "text": "Has the world's largest coral reef system",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Home to the world's deadliest animals, including box jellyfish",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "A continent and a country in one",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains the Outback, a vast desert region",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "One of the biggest exporters of wool",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Famous for its Aboriginal art and culture",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag contains the Union Jack in the top left corner",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "The only country to be home to kangaroos and koalas",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Hosted the 2000 Summer Olympics",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country celebrates Australia Day on January 26",
      "difficulty": 10
    }
  ],
  "IN": [
    {
      "id": 1,
      "text": "The second most populous country in the world",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Has the longest rail network in Asia",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Borders Pakistan, China, Nepal, Bhutan, Bangladesh, and Myanmar",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains the Himalayas, the tallest mountain range",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "Largest producer of spices",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Home to Bollywood, the largest film industry",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "Has a navy blue wheel (Ashoka Chakra) in the center",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "World's largest democracy",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Mahatma Gandhi was born here",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country has the Taj Mahal",
      "difficulty": 10
    }
  ],
  "DE": [
    {
      "id": 1,
      "text": "Has the largest economy in Europe",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Famous for its Autobahn highway with no speed limit",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Shares borders with 9 different countries",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Home to the Black Forest and Bavarian Alps",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "World's largest car exporter",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Known for Oktoberfest and beer culture",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag has black, red, and gold stripes",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "Invented the printing press",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Albert Einstein was born here",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country was once divided into East and West",
      "difficulty": 10
    }
  ],
  "ZA": [
    {
      "id": 1,
      "text": "Has three capital cities",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Home to the 'Big Five' safari animals",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Borders Namibia, Botswana, Zimbabwe, Mozambique, Eswatini, and Lesotho",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains Table Mountain, a famous landmark",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "A major exporter of gold and diamonds",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Famous for Nelson Mandela and apartheid history",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "Has six colors on its flag, the most of any national flag",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "First country to voluntarily give up nuclear weapons",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Elon Musk was born here",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "Hosted the 2010 FIFA World Cup",
      "difficulty": 10
    }
  ],
  "MX": [
    {
      "id": 1,
      "text": "Home to the largest pyramid in the world",
      "difficulty": 1
    },
    {
      "id": 2,
      "text": "Has the world's second most museums per city",
      "difficulty": 2
    },
    {
      "id": 3,
      "text": "Borders the United States, Guatemala, and Belize",
      "difficulty": 3
    },
    {
      "id": 4,
      "text": "Contains the Yucatán Peninsula and Sierra Madre mountains",
      "difficulty": 4
    },
    {
      "id": 5,
      "text": "Exports the most avocados in the world",
      "difficulty": 5
    },
    {
      "id": 6,
      "text": "Famous for Mariachi music and Day of the Dead",
      "difficulty": 6
    },
    {
      "id": 7,
      "text": "The flag features an eagle devouring a snake",
      "difficulty": 7
    },
    {
      "id": 8,
      "text": "The Aztecs founded its capital on a lake",
      "difficulty": 8
    },
    {
      "id": 9,
      "text": "Frida Kahlo was born here",
      "difficulty": 9
    },
    {
      "id": 10,
      "text": "This country gave the world tacos and tequila",
      "difficulty": 10
    }
  ]
};