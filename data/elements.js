// Complete 118 Elements Periodic Table Dataset with Kid-Friendly Descriptions, Mascots, and Applications
const ELEMENTS = [
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    mass: 1.008,
    period: 1,
    group: 1,
    category: "reactive-nonmetal",
    phase: "Gas",
    shells: [1],
    character: {
      title: "The Cosmic Pioneer",
      superpower: "The lightest element in the whole universe and powers the fiery Sun!",
      avatarEmoji: "🚀",
      personality: "Adventurous, energetic, and loves hanging out with oxygen to make water!",
      funFact: "More than 90% of all atoms in the universe are Hydrogen atoms! You drink it every day as H₂O.",
      color: "#38bdf8"
    },
    applications: [
      {
        id: "rocket-fuel",
        title: "Giant Space Rockets",
        desc: "Liquid hydrogen mixes with oxygen to create the colossal fiery blast that launches astronauts into outer space!",
        icon: "🚀",
        interactiveType: "rocket-blast"
      },
      {
        id: "clean-water",
        title: "Drinking Water (H₂O)",
        desc: "Two hydrogen atoms team up with one oxygen atom to make cool, refreshing water for oceans, rivers, and your water bottle!",
        icon: "💧",
        interactiveType: "water-splash"
      },
      {
        id: "clean-energy",
        title: "Clean Fuel Cell Cars",
        desc: "Hydrogen-powered cars release pure water vapor instead of smoky exhaust, keeping city air sparkling clean!",
        icon: "🚗",
        interactiveType: "clean-car"
      }
    ]
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    mass: 4.0026,
    period: 1,
    group: 18,
    category: "noble-gas",
    phase: "Gas",
    shells: [2],
    character: {
      title: "Captain Floaty",
      superpower: "Lighter than air, never catches fire, and creates high-pitched funny squeaky voices!",
      avatarEmoji: "🎈",
      personality: "Joyful, chill, and never likes to fight or bond with other elements (a true Noble Gas)!",
      funFact: "Helium was first discovered on the Sun during a solar eclipse before humans even found it on Earth!",
      color: "#f59e0b"
    },
    applications: [
      {
        id: "party-balloons",
        title: "Floating Party Balloons",
        desc: "Helium is so much lighter than normal air that it tugs on the string and lifts colorful balloons straight up into the sky!",
        icon: "🎈",
        interactiveType: "balloon-float"
      },
      {
        id: "mri-scanner",
        title: "Hospital MRI Scanners",
        desc: "Super-chilled liquid helium cools giant medical scanner magnets to near absolute zero so doctors can see inside the human body!",
        icon: "🏥",
        interactiveType: "mri-scan"
      },
      {
        id: "blimps",
        title: "Sky Blimps & Weather Balloons",
        desc: "Gigantic blimps float gently over sports stadiums using thousands of cubic meters of safe, non-flammable helium!",
        icon: "🛸",
        interactiveType: "blimp-float"
      }
    ]
  },
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    mass: 6.94,
    period: 2,
    group: 1,
    category: "alkali-metal",
    phase: "Solid",
    shells: [2, 1],
    character: {
      title: "Sparky Battery Bot",
      superpower: "Lightest solid metal on Earth—it can float on oil and stores tons of electrical energy!",
      avatarEmoji: "🔋",
      personality: "Always buzzing with electric potential, eager to recharge tablets and gaming consoles!",
      funFact: "Lithium is so soft you can easily slice it with a butter knife!",
      color: "#ec4899"
    },
    applications: [
      {
        id: "rechargeable-batteries",
        title: "Smartphones & Tablets",
        desc: "Lithium-ion batteries store electrical juice to keep your handheld games, phones, and laptops running all day long!",
        icon: "📱",
        interactiveType: "battery-charge"
      },
      {
        id: "electric-cars",
        title: "Electric Supercars",
        desc: "Thousands of lithium cells pack underneath electric vehicles to give them lightning-fast acceleration without gasoline!",
        icon: "⚡",
        interactiveType: "ev-speed"
      },
      {
        id: "fireworks-red",
        title: "Bright Crimson Fireworks",
        desc: "When pyrotechnicians ignite lithium salts, they burst into brilliant hot red sparkles across the night sky!",
        icon: "🎆",
        interactiveType: "firework-red"
      }
    ]
  },
  {
    number: 4,
    symbol: "Be",
    name: "Beryllium",
    mass: 9.0122,
    period: 2,
    group: 2,
    category: "alkaline-earth",
    phase: "Solid",
    shells: [2, 2],
    character: {
      title: "Cosmic Gem Knight",
      superpower: "Ultra-lightweight yet stiffer than steel! Survives the freezing void of deep space.",
      avatarEmoji: "🔭",
      personality: "Tough, high-tech, and forms dazzling green emerald gemstones!",
      funFact: "The gold-coated hexagonal mirrors of the James Webb Space Telescope are made of beryllium!",
      color: "#10b981"
    },
    applications: [
      {
        id: "space-telescopes",
        title: "James Webb Space Telescope",
        desc: "Its 18 giant golden mirrors are carved from beryllium because it doesn't warp or bend in deep freeze cosmic temperatures!",
        icon: "🔭",
        interactiveType: "telescope-view"
      },
      {
        id: "emerald-gems",
        title: "Glittering Emeralds",
        desc: "Beryllium atoms combine with aluminum and silicon inside the Earth's crust to grow deep green emerald crystals!",
        icon: "💎",
        interactiveType: "gem-sparkle"
      },
      {
        id: "supersonic-jets",
        title: "High-Speed Jet Aircraft",
        desc: "Used in missile guidance and supersonic airplane brakes because it can handle extreme friction heat without melting!",
        icon: "✈️",
        interactiveType: "jet-speed"
      }
    ]
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    mass: 10.81,
    period: 2,
    group: 13,
    category: "metalloid",
    phase: "Solid",
    shells: [2, 3],
    character: {
      title: "The Slime Alchemist",
      superpower: "Turns runny school glue into stretchy gooey green slime and makes shatter-proof glass!",
      avatarEmoji: "🧪",
      personality: "Playful, stretchy, and loves green campfire flames!",
      funFact: "Boron burns with a mysterious bright neon-green flame!",
      color: "#84cc16"
    },
    applications: [
      {
        id: "gooey-slime",
        title: "Super-Stretchy Slime",
        desc: "Borax (containing boron) links glue molecules together to turn liquid into squishy, bouncy, satisfying toy slime!",
        icon: "🧪",
        interactiveType: "slime-stretch"
      },
      {
        id: "pyrex-glass",
        title: "Oven-Safe Heat Glass",
        desc: "Borosilicate glass (Pyrex) doesn't crack when you transfer baking dishes straight from cold fridges into boiling ovens!",
        icon: "🥣",
        interactiveType: "heat-glass"
      },
      {
        id: "green-flames",
        title: "Neon Green Flare Shows",
        desc: "Igniting boron compounds creates magical emerald flames used in movie special effects and festival flares!",
        icon: "🔥",
        interactiveType: "green-flame"
      }
    ]
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    mass: 12.011,
    period: 2,
    group: 14,
    category: "reactive-nonmetal",
    phase: "Solid",
    shells: [2, 4],
    character: {
      title: "Shape-Shifter Titan",
      superpower: "Can transform into the hardest gemstone (Diamond) or soft pencil lead (Graphite)! The building block of all living things.",
      avatarEmoji: "💎",
      personality: "Versatile, friendly, forms millions of chemical bonds with almost everything!",
      funFact: "You, trees, apples, puppies, and dinosaurs are all made mostly of carbon atoms!",
      color: "#64748b"
    },
    applications: [
      {
        id: "diamond-jewels",
        title: "Unbreakable Diamonds",
        desc: "Under extreme heat and pressure miles deep inside Earth, carbon locks into a crystal cage creating the hardest mineral known!",
        icon: "💎",
        interactiveType: "diamond-sparkle"
      },
      {
        id: "pencil-lead",
        title: "Pencils & Art Sketches",
        desc: "Pencil 'lead' is actually graphite—layers of slippery carbon sheets that slide off onto paper when you draw!",
        icon: "✏️",
        interactiveType: "pencil-draw"
      },
      {
        id: "carbon-fiber",
        title: "Racing Bikes & Racecars",
        desc: "Weaving microscopic carbon threads together makes a feather-light material that is tougher than titanium steel!",
        icon: "🏎️",
        interactiveType: "racecar-boost"
      }
    ]
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    mass: 14.007,
    period: 2,
    group: 15,
    category: "reactive-nonmetal",
    phase: "Gas",
    shells: [2, 5],
    character: {
      title: "The Silent Giant",
      superpower: "Makes up nearly 80% of every single breath you take! Chills into instant ice-cream maker liquid.",
      avatarEmoji: "❄️",
      personality: "Calm, protective, and feeds crops around the world to keep plants lush and green!",
      funFact: "Liquid nitrogen is so cold (-196°C / -320°F) that it can freeze a soft flower so hard it shatters like glass!",
      color: "#0ea5e9"
    },
    applications: [
      {
        id: "plant-growth",
        title: "Plant Super-Food (Fertilizer)",
        desc: "Plants need nitrogen to grow tall, make leafy green chlorophyll, and produce yummy fruits and veggies!",
        icon: "🌱",
        interactiveType: "plant-grow"
      },
      {
        id: "liquid-nitro",
        title: "Flash-Frozen Ice Cream",
        desc: "Chefs pour liquid nitrogen into cream to freeze it in seconds, creating the smoothest, creamiest ice cream imaginable!",
        icon: "🍦",
        interactiveType: "ice-cream-freeze"
      },
      {
        id: "crispy-chips",
        title: "Puffy Chip Bags",
        desc: "Snack bags are puffed up with pure nitrogen gas to keep potato chips crunchy and prevent them from getting crushed!",
        icon: "🥔",
        interactiveType: "chip-puff"
      }
    ]
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    mass: 15.999,
    period: 2,
    group: 16,
    category: "reactive-nonmetal",
    phase: "Gas",
    shells: [2, 6],
    character: {
      title: "The Breath of Life",
      superpower: "Fuels every breath your lungs take and feeds roaring campfires with lively energy!",
      avatarEmoji: "🫁",
      personality: "Warm, generous, vital to life, and loves dancing with iron to make rust!",
      funFact: "Fish breathe oxygen too! Their gills filter dissolved oxygen molecules right out of the river water.",
      color: "#ef4444"
    },
    applications: [
      {
        id: "breathing-life",
        title: "Breathing & Lungs",
        desc: "Every time you inhale, oxygen travels into your bloodstream to power your muscles, brain, and heartbeat!",
        icon: "🫁",
        interactiveType: "lungs-breathe"
      },
      {
        id: "scuba-diving",
        title: "Scuba Diving & Space Suits",
        desc: "Explorers carry tanks of compressed oxygen to swim with coral reef dolphins or spacewalk outside the Space Station!",
        icon: "🤿",
        interactiveType: "scuba-dive"
      },
      {
        id: "campfires",
        title: "Cozy Campfire Warmth",
        desc: "Fire cannot burn without oxygen! When you blow gently on glowing embers, extra oxygen helps them burst into flame!",
        icon: "🔥",
        interactiveType: "fire-ignite"
      }
    ]
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    mass: 18.998,
    period: 2,
    group: 17,
    category: "halogen",
    phase: "Gas",
    shells: [2, 7],
    character: {
      title: "The Tooth Defender",
      superpower: "Fights off sugar bugs, hardens tooth enamel, and keeps pancakes from sticking to frying pans!",
      avatarEmoji: "🦷",
      personality: "Hyperactive, fiercely defensive of teeth, and the most reactive halogen on the block!",
      funFact: "Fluorine is so reactive that even glass and water will burst into flame if exposed to pure fluorine gas!",
      color: "#a855f7"
    },
    applications: [
      {
        id: "toothpaste-shield",
        title: "Cavity-Fighting Toothpaste",
        desc: "Fluoride bonds with your teeth to form a superhero armor shield that blocks acid attacks from sugary snacks!",
        icon: "🦷",
        interactiveType: "tooth-shield"
      },
      {
        id: "teflon-pans",
        title: "Non-Stick Frying Pans",
        desc: "Teflon (a carbon-fluorine bond) is so slippery that gooey fried eggs slide right off the pan without sticking!",
        icon: "🍳",
        interactiveType: "pan-slide"
      },
      {
        id: "refrigerators",
        title: "Air Conditioner Cooling",
        desc: "Hydrofluorocarbons circulate inside freezers and AC units, absorbing heat to keep ice cream frozen solid!",
        icon: "🧊",
        interactiveType: "freeze-cool"
      }
    ]
  },
  {
    number: 10,
    symbol: "Ne",
    name: "Neon",
    mass: 20.180,
    period: 2,
    group: 18,
    category: "noble-gas",
    phase: "Gas",
    shells: [2, 8],
    character: {
      title: "The Night Glow Master",
      superpower: "Lights up the midnight city in mesmerizing electric reddish-orange brilliance!",
      avatarEmoji: "💡",
      personality: "Flashy, artistic, cool-headed, and loves nightlife and retro neon diners!",
      funFact: "True neon only glows reddish-orange! Blue and green 'neon' signs actually use argon or mercury gas.",
      color: "#f43f5e"
    },
    applications: [
      {
        id: "glowing-signs",
        title: "Glowing Diner Signs",
        desc: "Sending high-voltage electricity through a glass tube filled with neon gas makes electrons jump and glow brilliant red!",
        icon: "🏮",
        interactiveType: "neon-glow"
      },
      {
        id: "laser-beams",
        title: "Helium-Neon Red Lasers",
        desc: "Used in barcode checkout scanners at grocery stores and science laboratory experiments for razor-sharp red laser dots!",
        icon: "🔴",
        interactiveType: "laser-shoot"
      },
      {
        id: "high-voltage-testers",
        title: "Electrician Light Testers",
        desc: "Tiny neon bulbs glow to warn electricians whether an electrical outlet is safely switched off or carrying live juice!",
        icon: "⚡",
        interactiveType: "voltage-spark"
      }
    ]
  },
  {
    number: 11,
    symbol: "Na",
    name: "Sodium",
    mass: 22.990,
    period: 3,
    group: 1,
    category: "alkali-metal",
    phase: "Solid",
    shells: [2, 8, 1],
    character: {
      title: "The Salty Sparkler",
      superpower: "Teamed up with Chlorine to make delicious French fry salt! Splashes with fizzing sparks in water.",
      avatarEmoji: "🧂",
      personality: "Explosively enthusiastic, salty, and crucial for sending thoughts across your brain nerves!",
      funFact: "Sodium metal is so reactive that dropping a chunk into water causes it to fizz, skate on top, and burst into golden flame!",
      color: "#eab308"
    },
    applications: [
      {
        id: "table-salt",
        title: "Tasty Table Salt (NaCl)",
        desc: "Sodium joins chlorine to make salt crystals that make pretzels, french fries, and popcorn taste mouth-wateringly delicious!",
        icon: "🧂",
        interactiveType: "salt-shake"
      },
      {
        id: "streetlights-yellow",
        title: "Golden Highway Streetlights",
        desc: "Sodium-vapor lamps cast that cozy warm golden glow on foggy highway roads because their light penetrates mist easily!",
        icon: "🏮",
        interactiveType: "street-light"
      },
      {
        id: "nerve-signals",
        title: "Brain & Muscle Signals",
        desc: "Sodium ions pump in and out of your nerve cells like tiny telegraph messengers so your brain can tell your hands to catch a ball!",
        icon: "🧠",
        interactiveType: "nerve-pulse"
      }
    ]
  },
  {
    number: 12,
    symbol: "Mg",
    name: "Magnesium",
    mass: 24.305,
    period: 3,
    group: 2,
    category: "alkaline-earth",
    phase: "Solid",
    shells: [2, 8, 2],
    character: {
      title: "The White Flash Wizard",
      superpower: "Ignites into blinding white flare light! Gives plants their lush green leaf color.",
      avatarEmoji: "✨",
      personality: "Bright, confident, and keeps your muscles relaxed after sports!",
      funFact: "At the heart of every single green chlorophyll molecule in leaves sits one magnesium atom!",
      color: "#14b8a6"
    },
    applications: [
      {
        id: "sparklers-fireworks",
        title: "Dazzling Sparklers",
        desc: "Fourth of July and Diwali sparklers crackle with bright white glittering sparks thanks to burning magnesium powder!",
        icon: "🎇",
        interactiveType: "sparkler-burn"
      },
      {
        id: "racing-wheels",
        title: "Featherweight 'Mag' Wheels",
        desc: "Magnesium alloys make super-lightweight racecar wheels and bicycle frames that sprint faster than steel!",
        icon: "🏎️",
        interactiveType: "wheel-spin"
      },
      {
        id: "leaf-sunpower",
        title: "Green Leaves & Photosynthesis",
        desc: "Plants use magnesium inside chlorophyll like a solar panel to turn warm sunlight into sweet fruit and oxygen!",
        icon: "🍃",
        interactiveType: "leaf-sun"
      }
    ]
  },
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    mass: 26.982,
    period: 3,
    group: 13,
    category: "post-transition",
    phase: "Solid",
    shells: [2, 8, 3],
    character: {
      title: "The Featherweight Flyer",
      superpower: "Never rusts, super shiny, bendy, and builds giant airplanes that soar through clouds!",
      avatarEmoji: "✈️",
      personality: "Resourceful, super-recyclable, and loves wrapping up tasty lunchtime sandwiches!",
      funFact: "You can melt and recycle an aluminum soda can, and it will be back on grocery shelves as a brand-new can in just 60 days!",
      color: "#94a3b8"
    },
    applications: [
      {
        id: "soda-cans",
        title: "Soda Cans & Foil Wraps",
        desc: "Shiny aluminum cans keep fizzy bubbles trapped inside, and aluminum foil keeps leftover pizza warm and fresh!",
        icon: "🥫",
        interactiveType: "can-crush"
      },
      {
        id: "airplanes",
        title: "Commercial Jetliners",
        desc: "Airplanes need to be ultra-strong yet light as a bird; aluminum alloys make up over 70% of a giant passenger jet's body!",
        icon: "✈️",
        interactiveType: "plane-fly"
      },
      {
        id: "smartphones-body",
        title: "Sleek Laptop & Phone Cases",
        desc: "Smooth brushed aluminum bodies protect modern tablets and laptops against drops while keeping them thin and elegant!",
        icon: "💻",
        interactiveType: "device-glow"
      }
    ]
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    mass: 28.085,
    period: 3,
    group: 14,
    category: "metalloid",
    phase: "Solid",
    shells: [2, 8, 4],
    character: {
      title: "The Microchip Brain",
      superpower: "Powers every computer chip, video game console, beach sand castle, and solar panel!",
      avatarEmoji: "🤖",
      personality: "Smart, calculating, patient, and connects human civilization to the digital future!",
      funFact: "Ordinary beach sand is mostly silicon dioxide (quartz)! Silicon Valley is named after this element.",
      color: "#0284c7"
    },
    applications: [
      {
        id: "computer-chips",
        title: "Computer Processors & GPUs",
        desc: "Billions of microscopic silicon switches calculate your favorite 3D video game graphics at billions of ticks per second!",
        icon: "💻",
        interactiveType: "chip-pulse"
      },
      {
        id: "solar-panels",
        title: "Rooftop Solar Panels",
        desc: "Silicon wafers catch photons from the Sun and convert daylight into clean electricity to power home lights!",
        icon: "☀️",
        interactiveType: "solar-power"
      },
      {
        id: "beach-glass",
        title: "Window Glass & Sand Castles",
        desc: "Melting silica sand inside intense furnaces cools into sparkling clear glass windows, mirrors, and drinking cups!",
        icon: "🏖️",
        interactiveType: "sand-castle"
      }
    ]
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    mass: 30.974,
    period: 3,
    group: 15,
    category: "reactive-nonmetal",
    phase: "Solid",
    shells: [2, 8, 5],
    character: {
      title: "The Glowing Striker",
      superpower: "Strikes matches to make fire, glows in dark caves, and forms the backbone of human DNA!",
      avatarEmoji: "🔥",
      personality: "Fiery, energetic, mysterious, and holds the secrets of genetics in every cell!",
      funFact: "White phosphorus glows with a ghostly greenish luminescence when exposed to oxygen in the dark!",
      color: "#f97316"
    },
    applications: [
      {
        id: "matchsticks",
        title: "Safety Match Striker",
        desc: "The rough red strip on the side of a matchbox contains red phosphorus; dragging the match head sparks instant friction heat!",
        icon: "🔥",
        interactiveType: "match-strike"
      },
      {
        id: "dna-backbone",
        title: "Human DNA & Cell Energy",
        desc: "Phosphate molecules hold together the twisted ladder of your genetic code (DNA) and store energy currency (ATP) in your body!",
        icon: "🧬",
        interactiveType: "dna-spin"
      },
      {
        id: "glow-toys",
        title: "Glow-in-the-Dark Toys",
        desc: "Phosphors absorb daylight and slowly release soft green light after you switch off your bedroom bedtime lamps!",
        icon: "🌟",
        interactiveType: "toy-glow"
      }
    ]
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    mass: 32.06,
    period: 3,
    group: 16,
    category: "reactive-nonmetal",
    phase: "Solid",
    shells: [2, 8, 6],
    character: {
      title: "The Volcano Alchemist",
      superpower: "Bright yellow crystals from volcanic craters that make bouncy rubber car tires!",
      avatarEmoji: "🌋",
      personality: "Pungent, volcanic, colorful, and smells like funky eggs when combined with hydrogen!",
      funFact: "Sulfur is responsible for the tear-jerking smell when you slice open a fresh onion!",
      color: "#eab308"
    },
    applications: [
      {
        id: "rubber-tires",
        title: "Bouncy Car & Bike Tires",
        desc: "Heating natural rubber with sulfur (vulcanization) cross-links polymers so car tires don't turn mushy in summer heat!",
        icon: "🚗",
        interactiveType: "tire-bounce"
      },
      {
        id: "fireworks-powder",
        title: "Black Powder & Fireworks",
        desc: "Ancient chemists mixed sulfur with charcoal and saltpeter to invent gunpowder for dazzling festival fireworks!",
        icon: "🎆",
        interactiveType: "firework-burst"
      },
      {
        id: "onion-tears",
        title: "Onion Slices & Garlic",
        desc: "Sulfur compounds give onions, garlic, and mustard their signature spicy zing and make chefs cry happy tears!",
        icon: "🧅",
        interactiveType: "onion-chop"
      }
    ]
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    mass: 35.45,
    period: 3,
    group: 17,
    category: "halogen",
    phase: "Gas",
    shells: [2, 8, 7],
    character: {
      title: "The Pool Guardian",
      superpower: "Zaps nasty water bacteria to keep swimming pools crystal blue and sparkling clean!",
      avatarEmoji: "🏊",
      personality: "Sharp, vigilant, protective of public health, and half of the delicious salt duo!",
      funFact: "That famous 'swimming pool smell' is actually chlorine doing its heroic job keeping the water germ-free!",
      color: "#10b981"
    },
    applications: [
      {
        id: "swimming-pool",
        title: "Crystal Blue Pools",
        desc: "Added to public pools and water parks to destroy invisible germs so you can splash and dive safely all summer!",
        icon: "🏊",
        interactiveType: "pool-clean"
      },
      {
        id: "safe-tap-water",
        title: "Clean City Tap Water",
        desc: "Water treatment plants purify millions of gallons of lake water with tiny amounts of chlorine to make it safe to drink!",
        icon: "🚰",
        interactiveType: "tap-purify"
      },
      {
        id: "pvc-pipes",
        title: "PVC Plumbing Pipes",
        desc: "Chlorine binds into sturdy PVC plastic pipes that deliver fresh water into homes and school drinking fountains!",
        icon: "🛠️",
        interactiveType: "pipe-connect"
      }
    ]
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    mass: 39.948,
    period: 3,
    group: 18,
    category: "noble-gas",
    phase: "Gas",
    shells: [2, 8, 8],
    character: {
      title: "The Lazy Shield",
      superpower: "Completely unreactive gas that shields hot lightbulb filaments and preserves ancient historical scrolls!",
      avatarEmoji: "📜",
      personality: "Its name means 'lazy/inactive' in Greek! It loves relaxing inside double-pane cozy windows.",
      funFact: "Argon is the 3rd most common gas in Earth's atmosphere, beating out carbon dioxide and water vapor!",
      color: "#818cf8"
    },
    applications: [
      {
        id: "incandescent-bulb",
        title: "Incandescent Lightbulbs",
        desc: "Argon gas fills glass lightbulbs so the white-hot glowing tungsten wire inside doesn't burn out or oxidize!",
        icon: "💡",
        interactiveType: "bulb-glow"
      },
      {
        id: "double-pane-windows",
        title: "Insulated House Windows",
        desc: "Pumping argon between double-pane window glass traps cozy room warmth inside during winter snowstorms!",
        icon: "🪟",
        interactiveType: "window-insulate"
      },
      {
        id: "ancient-scrolls",
        title: "Historical Document Vaults",
        desc: "The American Declaration of Independence is stored in airtight argon cases to protect it from decaying over centuries!",
        icon: "📜",
        interactiveType: "scroll-protect"
      }
    ]
  },
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    mass: 39.098,
    period: 4,
    group: 1,
    category: "alkali-metal",
    phase: "Solid",
    shells: [2, 8, 8, 1],
    character: {
      title: "The Banana Dynamo",
      superpower: "Stops muscle cramps, keeps heartbeats rhythmic, and fuels sweet ripe yellow bananas!",
      avatarEmoji: "🍌",
      personality: "Bouncy, musical, loves sports, and burns with a gorgeous lilac-purple flame!",
      funFact: "Bananas are famous for potassium! Because potassium naturally has tiny traces of K-40, bananas are very gently radioactive (completely safe to eat)!",
      color: "#ca8a04"
    },
    applications: [
      {
        id: "ripe-bananas",
        title: "Bananas & Athletic Snacks",
        desc: "Athletes eat bananas during halftime matches to get potassium, which prevents leg muscle cramps during sprints!",
        icon: "🍌",
        interactiveType: "banana-peel"
      },
      {
        id: "heart-rhythm",
        title: "Steady Heartbeats",
        desc: "Your heart muscle beats over 100,000 times a day thanks to potassium ions coordinating each rhythmic squeeze!",
        icon: "❤️",
        interactiveType: "heart-beat"
      },
      {
        id: "lilac-flames",
        title: "Lilac Violet Fireworks",
        desc: "Fireworks artists use potassium salts to paint the midnight sky with soft pastel lavender and violet bursts!",
        icon: "🎆",
        interactiveType: "firework-purple"
      }
    ]
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    mass: 40.078,
    period: 4,
    group: 2,
    category: "alkaline-earth",
    phase: "Solid",
    shells: [2, 8, 8, 2],
    character: {
      title: "The Bone Builder",
      superpower: "Builds rock-solid human bones, gleaming white teeth, and sea turtle shells!",
      avatarEmoji: "🦴",
      personality: "Strong, upright, dependable, and loves cold glasses of milk and cheese slices!",
      funFact: "Over 99% of all the calcium in your body is stored in your bones and teeth as a living mineral bank!",
      color: "#059669"
    },
    applications: [
      {
        id: "strong-bones",
        title: "Strong Bones & Skeleton",
        desc: "Drinking milk and eating yogurt deposits calcium into your skeleton so you can run, jump, and climb jungle gyms!",
        icon: "🦴",
        interactiveType: "bone-boost"
      },
      {
        id: "sea-shells",
        title: "Ocean Seashells & Corals",
        desc: "Clams, oysters, and sea turtles weave dissolved calcium from sea water into impenetrable protective armor shells!",
        icon: "🐚",
        interactiveType: "shell-armor"
      },
      {
        id: "chalkboard-art",
        title: "Classroom Chalk & Plaster",
        desc: "Calcium carbonate creates the white classroom sticks teachers write with on blackboards and sculptures in art class!",
        icon: "🖍️",
        interactiveType: "chalk-draw"
      }
    ]
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    mass: 44.956,
    period: 4,
    group: 3,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 9, 2],
    character: {
      title: "The Aero-Sport Metal",
      superpower: "Makes baseball bats and bicycle frames feather-light yet ultra-durable!",
      avatarEmoji: "⚾",
      personality: "Athletic, rare, and loves outdoor sports stadiums!",
      funFact: "Scandium lights mimic natural sunlight so well they are used to illuminate night-time television stadiums!",
      color: "#6366f1"
    },
    applications: [
      {
        id: "baseball-bats",
        title: "Super-Pop Baseball Bats",
        desc: "Scandium-aluminum alloy bats are light enough to swing at supersonic speed while hitting home runs over outfield fences!",
        icon: "⚾",
        interactiveType: "bat-hit"
      },
      {
        id: "stadium-lights",
        title: "Stadium Floodlights",
        desc: "High-intensity metal halide lamps with scandium create daylight-bright lighting for night soccer matches!",
        icon: "💡",
        interactiveType: "stadium-light"
      }
    ]
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    mass: 47.867,
    period: 4,
    group: 4,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 10, 2],
    character: {
      title: "The Space Gladiator",
      superpower: "Strong as steel but half the weight, completely immune to sea rust, and safe inside human joints!",
      avatarEmoji: "🛡️",
      personality: "Indestructible, futuristic, and flies aboard Mach-3 stealth spy planes!",
      funFact: "Named after the ancient Titans of Greek mythology because of its incredible superhuman strength!",
      color: "#64748b"
    },
    applications: [
      {
        id: "supersonic-jets",
        title: "Stealth Spy Planes & Rockets",
        desc: "The SR-71 Blackbird spy plane was built almost entirely of titanium so it wouldn't melt from air friction at 2,000+ mph!",
        icon: "✈️",
        interactiveType: "jet-afterburner"
      },
      {
        id: "bone-implants",
        title: "Medical Joint Implants",
        desc: "Doctors use titanium pins to repair broken bones because human bone cells actually grow directly onto titanium without allergic reactions!",
        icon: "🦾",
        interactiveType: "bionic-arm"
      },
      {
        id: "sunscreen-white",
        title: "Sunscreen & White Paint",
        desc: "Titanium dioxide is an ultra-pure white mineral that reflects UV sun rays away from your skin at the swimming pool!",
        icon: "🧴",
        interactiveType: "sunscreen-block"
      }
    ]
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    mass: 50.942,
    period: 4,
    group: 5,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 11, 2],
    character: {
      title: "The Heavy-Duty Mechanic",
      superpower: "Makes steel tools so tough they can withstand crushing torque without snapping!",
      avatarEmoji: "🔧",
      personality: "Hardworking, reliable, named after Vanadis, the Norse goddess of beauty!",
      funFact: "Henry Ford used vanadium steel in the famous Model T car to make it survive bumpy dirt roads!",
      color: "#78716c"
    },
    applications: [
      {
        id: "mechanic-wrenches",
        title: "Unbreakable Wrenches & Tools",
        desc: "Mechanics look for 'Chrome-Vanadium' stamped on their wrenches because they won't bend even when loosening rusted bolts!",
        icon: "🔧",
        interactiveType: "wrench-turn"
      },
      {
        id: "grid-batteries",
        title: "Giant Wind Farm Batteries",
        desc: "Vanadium redox flow batteries store megawatts of green electricity from giant wind turbines to power towns at night!",
        icon: "🔋",
        interactiveType: "grid-battery"
      }
    ]
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    mass: 51.996,
    period: 4,
    group: 6,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 13, 1],
    character: {
      title: "The Mirror Shiner",
      superpower: "Gives stainless steel kitchen cutlery its mirror shine and prevents red rust forever!",
      avatarEmoji: "🪞",
      personality: "Dapper, polished, dazzling, and paints classic vintage cars in gleaming chrome!",
      funFact: "Its name comes from the Greek word 'chroma' (color) because its chemical compounds come in every color of the rainbow!",
      color: "#94a3b8"
    },
    applications: [
      {
        id: "stainless-cutlery",
        title: "Stainless Steel Spoons & Forks",
        desc: "Adding chromium to iron creates an invisible nanometer-thin oxide shield that keeps eating forks shiny through thousand dishwasher washes!",
        icon: "🍴",
        interactiveType: "fork-shine"
      },
      {
        id: "car-bumpers",
        title: "Classic Chrome Car Bumpers",
        desc: "Vintage cruisers gleam in sunlight with mirror-finish chrome bumpers that catch everyone's eye at car shows!",
        icon: "🚗",
        interactiveType: "chrome-reflect"
      },
      {
        id: "red-rubies",
        title: "Blood-Red Gem Rubies",
        desc: "Traces of chromium trapped inside mineral crystals turn ordinary aluminum oxide into fiery red ruby gemstones!",
        icon: "💎",
        interactiveType: "ruby-shine"
      }
    ]
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    mass: 54.938,
    period: 4,
    group: 7,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 13, 2],
    character: {
      title: "The Tough Railmaster",
      superpower: "Hardens steel railroad tracks so 10,000-ton freight trains can thunder across without bending them!",
      avatarEmoji: "🚂",
      personality: "Steely, grounded, steadfast, and loves heavy freight trains!",
      funFact: "Hadfield manganese steel becomes HARDER the more you hit it with a heavy hammer!",
      color: "#a1a1aa"
    },
    applications: [
      {
        id: "train-tracks",
        title: "High-Speed Railroad Tracks",
        desc: "Manganese makes steel track switches so tough they can take millions of pounding train wheels without wearing out!",
        icon: "🚂",
        interactiveType: "train-roll"
      },
      {
        id: "alkaline-batteries",
        title: "AA Toy Batteries",
        desc: "Manganese dioxide powers the inside of standard AA and AAA batteries that run remote control toy cars!",
        icon: "🔋",
        interactiveType: "battery-spin"
      }
    ]
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    mass: 55.845,
    period: 4,
    group: 8,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 14, 2],
    character: {
      title: "The Metal Titan",
      superpower: "Forms giant suspension bridges, magnetic needles in compasses, and gives blood its rich red color!",
      avatarEmoji: "🧲",
      personality: "Heroic, magnetic, deeply rooted in Earth's core, and builds modern civilization!",
      funFact: "The center of planet Earth is a giant spinning ball of solid hot iron, creating our planet's magnetic shield!",
      color: "#b91c1c"
    },
    applications: [
      {
        id: "suspension-bridges",
        title: "Golden Gate Bridges & Skyscrapers",
        desc: "Huge steel girders (made of iron and carbon) form the skeletal frame of city towers and breathtaking bridges!",
        icon: "🌉",
        interactiveType: "bridge-support"
      },
      {
        id: "red-blood-cells",
        title: "Red Blood Cells (Hemoglobin)",
        desc: "Iron atoms inside your red blood cells latch onto oxygen in your lungs and deliver it like tiny delivery trucks to your brain!",
        icon: "🩸",
        interactiveType: "blood-flow"
      },
      {
        id: "magnets-compass",
        title: "Magnets & Navigation Compasses",
        desc: "Iron is naturally magnetic! Compass needles align with Earth's iron magnetic field so hikers find their way home!",
        icon: "🧭",
        interactiveType: "magnet-attract"
      }
    ]
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    mass: 58.933,
    period: 4,
    group: 9,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 15, 2],
    character: {
      title: "The Deep Blue Artist",
      superpower: "Paints pottery in royal sapphire blue and keeps jet engine turbines spinning in fiery heat!",
      avatarEmoji: "🎨",
      personality: "Artistic, resilient, vibrant, and loves medieval stained glass windows!",
      funFact: "Medieval miners believed underground goblins (kobolds) cursed their silver ores, giving cobalt its name!",
      color: "#2563eb"
    },
    applications: [
      {
        id: "cobalt-blue-glass",
        title: "Royal Blue Stained Glass",
        desc: "Adding a dash of cobalt to molten glass creates that breathtaking rich royal blue seen in church windows and porcelain vases!",
        icon: "🏺",
        interactiveType: "glass-tint"
      },
      {
        id: "super-magnets",
        title: "Guitar Pickups & Super Magnets",
        desc: "Alnico (Aluminum-Nickel-Cobalt) magnets inside electric guitars convert vibrating guitar strings into rocking guitar riffs!",
        icon: "🎸",
        interactiveType: "guitar-sound"
      }
    ]
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    mass: 58.693,
    period: 4,
    group: 10,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 16, 2],
    character: {
      title: "The Pocket Coin Star",
      superpower: "Jingles in your piggy bank and helps electric guitar strings sing with musical tone!",
      avatarEmoji: "🪙",
      personality: "Friendly, melodious, stainless, and loves collecting in coin jars!",
      funFact: "A US 5-cent 'Nickel' coin actually contains 75% copper and only 25% nickel!",
      color: "#71717a"
    },
    applications: [
      {
        id: "pocket-coins",
        title: "Shiny Pocket Coins",
        desc: "Coins use nickel alloys because they resist finger oils, don't corrode in pockets, and keep their crisp stamp for decades!",
        icon: "🪙",
        interactiveType: "coin-flip"
      },
      {
        id: "guitar-strings",
        title: "Electric Guitar Strings",
        desc: "Winding strings with nickel gives rock guitars a warm, resonant, singing tone that electric amplifiers love!",
        icon: "🎸",
        interactiveType: "string-pluck"
      }
    ]
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    mass: 63.546,
    period: 4,
    group: 11,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 1],
    character: {
      title: "The Electric Conductor",
      superpower: "Carries electric currents like a lightning expressway and turns Statue-of-Liberty green over time!",
      avatarEmoji: "⚡",
      personality: "Warm, reddish-gold, buzzing with electricity, and one of the oldest metals known to humankind!",
      funFact: "The Statue of Liberty in New York is covered in a copper skin as thick as two pennies! Air and rain turned it green (verdigris).",
      color: "#b45309"
    },
    applications: [
      {
        id: "electrical-wires",
        title: "Wall Electrical Cables",
        desc: "Inside every phone charger and wall lamp cord sits flexible copper wire carrying speedy electrical current!",
        icon: "🔌",
        interactiveType: "circuit-flow"
      },
      {
        id: "statue-liberty",
        title: "Statue of Liberty & Bronze Sculptures",
        desc: "Copper sheets formed Lady Liberty! After years of sea breezes, copper oxidizes to form an iconic mint-green armor coat!",
        icon: "🗽",
        interactiveType: "statue-turn-green"
      },
      {
        id: "musical-brass",
        title: "Trumpets, Tubas & Horns",
        desc: "Melting copper with zinc creates brass, the resonant golden metal used to craft marching band trumpets and trombones!",
        icon: "🎺",
        interactiveType: "trumpet-play"
      }
    ]
  },
  {
    number: 30,
    symbol: "Zn",
    name: "Zinc",
    mass: 65.38,
    period: 4,
    group: 12,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 2],
    character: {
      title: "The Rust Guard",
      superpower: "Sacrifices itself to protect steel from rust and helps your immune system battle colds!",
      avatarEmoji: "🛡️",
      personality: "Brave, protective, healthy, and keeps nails and metal roofing safe in thunderstorms!",
      funFact: "Galvanizing steel with zinc creates that sparkling frosted pattern seen on highway guard rails and metal buckets!",
      color: "#6b7280"
    },
    applications: [
      {
        id: "galvanized-roofs",
        title: "Galvanized Metal Roofing & Nails",
        desc: "Dipping steel nails into liquid zinc seals them with a rust-proof jacket so outdoor sheds last through rainstorms!",
        icon: "🔨",
        interactiveType: "nail-hammer"
      },
      {
        id: "immune-shield",
        title: "Immune System Healing",
        desc: "Your body needs zinc to heal scraped knees fast and help white blood cells defeat common cold viruses!",
        icon: "🩹",
        interactiveType: "wound-heal"
      }
    ]
  },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    mass: 69.723,
    period: 4,
    group: 13,
    category: "post-transition",
    phase: "Solid",
    shells: [2, 8, 18, 3],
    character: {
      title: "The Hand Melter",
      superpower: "A shiny metal spoon that melts into a puddle of liquid silver right in the palm of your warm hand!",
      avatarEmoji: "🥄",
      personality: "Magical, playful, surprising, and powers ultra-fast 5G phone antennas!",
      funFact: "Gallium melts at just 29.7°C (85.6°F)—cooler than normal human body temperature!",
      color: "#3b82f6"
    },
    applications: [
      {
        id: "hand-melting-metal",
        title: "Metal That Melts in Hands",
        desc: "A solid gallium spoon will liquefy in your hand like a piece of chocolate without burning you at all!",
        icon: "🥄",
        interactiveType: "spoon-melt"
      },
      {
        id: "fast-chargers",
        title: "Gallium Nitride (GaN) Fast Chargers",
        desc: "Tiny GaN wall plugs charge tablets and phones twice as fast as old bricks without overheating!",
        icon: "⚡",
        interactiveType: "fast-charge"
      }
    ]
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    mass: 72.63,
    period: 4,
    group: 14,
    category: "metalloid",
    phase: "Solid",
    shells: [2, 8, 18, 4],
    character: {
      title: "The Night Vision Seer",
      superpower: "Transparent to infrared light, allowing rescue cameras to see body heat in pitch darkness!",
      avatarEmoji: "🕶️",
      personality: "Mysterious, sharp-eyed, and guided early radio transceivers!",
      funFact: "Germanium looks like shiny metallic glass, but infrared heat cameras can see right through it!",
      color: "#0284c7"
    },
    applications: [
      {
        id: "night-vision",
        title: "Infrared Night Vision Lenses",
        desc: "Helicopter search-and-rescue teams use Germanium lenses to spot lost hikers in dark forests by their body heat!",
        icon: "🕶️",
        interactiveType: "night-vision-view"
      },
      {
        id: "fiber-optics",
        title: "High-Speed Fiber Internet",
        desc: "Germanium glass boosts light signals zooming through undersea fiber cables connecting continents to the web!",
        icon: "🌐",
        interactiveType: "fiber-light"
      }
    ]
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    mass: 74.922,
    period: 4,
    group: 15,
    category: "metalloid",
    phase: "Solid",
    shells: [2, 8, 18, 5],
    character: {
      title: "The Laser Semiconductor",
      superpower: "Gallium Arsenide makes laser diodes for fiber optics and super-efficient Mars rover solar panels!",
      avatarEmoji: "🛰️",
      personality: "Cautious, potent, high-tech, and famous in classic mystery detective books!",
      funFact: "In tiny precise doses, arsenic is used in space exploration to create high-efficiency solar cells for Mars rovers!",
      color: "#6b7280"
    },
    applications: [
      {
        id: "mars-solar",
        title: "Mars Rover Solar Arrays",
        desc: "Gallium Arsenide solar cells harvest faint Martian sunlight to drive robotic rovers across red crater dunes!",
        icon: "🛰️",
        interactiveType: "rover-drive"
      },
      {
        id: "laser-diode",
        title: "Supermarket Barcode Scanners",
        desc: "Semiconductor lasers read product barcodes in milliseconds as items slide across checkout conveyor belts!",
        icon: "🔴",
        interactiveType: "barcode-beep"
      }
    ]
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    mass: 78.971,
    period: 4,
    group: 16,
    category: "reactive-nonmetal",
    phase: "Solid",
    shells: [2, 8, 18, 6],
    character: {
      title: "The Light-Activated Copier",
      superpower: "Conducts electricity only when illuminated by light! Powers classic office photocopiers.",
      avatarEmoji: "📠",
      personality: "Named after Selene, goddess of the Moon, sensitive to light rays!",
      funFact: "Brazil nuts have more selenium than any other food on Earth—just one or two nuts give you your whole day's supply!",
      color: "#e11d48"
    },
    applications: [
      {
        id: "photocopiers",
        title: "Office Copy Machines",
        desc: "Photocopier drums use selenium to attract black toner powder only where light doesn't shine, printing crisp homework sheets!",
        icon: "📠",
        interactiveType: "copy-print"
      },
      {
        id: "ruby-red-glass",
        title: "Traffic Light Red Glass",
        desc: "Adds deep stop-sign crimson color to glass lenses on traffic signals and lighthouse lanterns!",
        icon: "🚦",
        interactiveType: "traffic-stop"
      }
    ]
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    mass: 79.904,
    period: 4,
    group: 17,
    category: "halogen",
    phase: "Liquid",
    shells: [2, 8, 18, 7],
    character: {
      title: "The Amber Fluid",
      superpower: "One of only TWO elements on the whole periodic table that is liquid at room temperature!",
      avatarEmoji: "🧪",
      personality: "Dense, reddish-brown, fumes into mist, and helps put out accidental fires!",
      funFact: "Only Bromine (a nonmetal) and Mercury (a metal) are liquid at room temperature on the entire table!",
      color: "#ea580c"
    },
    applications: [
      {
        id: "flame-retardant",
        title: "Fireproof Clothes & Carpets",
        desc: "Brominated compounds are blended into children's sleepwear and airplane seats to stop fabrics from catching fire!",
        icon: "🚒",
        interactiveType: "flame-quench"
      },
      {
        id: "vintage-photos",
        title: "Old-School Camera Film",
        desc: "Silver bromide crystals capture photons on camera film rolls to develop black-and-white family photographs!",
        icon: "📷",
        interactiveType: "photo-develop"
      }
    ]
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    mass: 83.798,
    period: 4,
    group: 18,
    category: "noble-gas",
    phase: "Gas",
    shells: [2, 8, 18, 8],
    character: {
      title: "The Super Flash",
      superpower: "Powers blinding airport runway strobe flashes so pilots can find the runway through heavy fog!",
      avatarEmoji: "⚡",
      personality: "Its name means 'the hidden one' in Greek—quiet, heroic, and shares a name with Superman's home planet!",
      funFact: "While it shares a name with Superman's homeworld, real krypton gas won't take away anyone's superpowers!",
      color: "#06b6d4"
    },
    applications: [
      {
        id: "runway-strobes",
        title: "Airport Runway Strobes",
        desc: "Bright pulsed krypton flashbulbs pierce through thick clouds and snowstorms so passenger jets land safely on the runway!",
        icon: "🛬",
        interactiveType: "runway-flash"
      },
      {
        id: "laser-shows",
        title: "Concert Laser Light Shows",
        desc: "Krypton gas lasers produce bright emerald green and sapphire blue light beams that dance across arena concert stages!",
        icon: "🎶",
        interactiveType: "concert-laser"
      }
    ]
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    mass: 107.87,
    period: 5,
    group: 11,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 18, 1],
    character: {
      title: "The Silver Champion",
      superpower: "The #1 best electrical conductor and the most reflective mirror metal on the entire planet!",
      avatarEmoji: "🥈",
      personality: "Bright, aristocratic, shiny, and zaps bacteria on contact!",
      funFact: "Silver is the most reflective element known—nearly 99% of all visible light bounces straight off polished silver!",
      color: "#94a3b8"
    },
    applications: [
      {
        id: "crystal-mirrors",
        title: "Sparkling Glass Mirrors",
        desc: "A thin microscopic layer of real silver is sprayed on the back of glass so you can see your reflection clearly every morning!",
        icon: "🪞",
        interactiveType: "mirror-reflect"
      },
      {
        id: "olympic-medals",
        title: "Olympic Silver Medals & Rings",
        desc: "Crafted into shimmering second-place Olympic medals, elegant jewelry, and shiny silverware for royal banquets!",
        icon: "🥈",
        interactiveType: "medal-shine"
      },
      {
        id: "solar-circuits",
        title: "High-Efficiency Solar Panels",
        desc: "Silver ink lines printed on solar panels carry electrical juice with near-zero energy loss!",
        icon: "☀️",
        interactiveType: "solar-flow"
      }
    ]
  },
  {
    number: 50,
    symbol: "Sn",
    name: "Tin",
    mass: 118.71,
    period: 5,
    group: 14,
    category: "post-transition",
    phase: "Solid",
    shells: [2, 8, 18, 18, 4],
    character: {
      title: "The Tin Whistle Soldier",
      superpower: "Coats soup cans to keep food fresh for years and solders robot circuit boards together!",
      avatarEmoji: "🥫",
      personality: "Malleable, musical, unselfish, and emits a famous 'tin cry' sound when bent!",
      funFact: "When you bend a bar of pure tin, the crystal structure crackles with an audible noise called the 'tin cry'!",
      color: "#94a3b8"
    },
    applications: [
      {
        id: "soup-cans",
        title: "Sealed Soup & Veggie Cans",
        desc: "Steel food cans are lined with an ultra-thin coat of tin so acidic tomato soups don't eat into the steel metal!",
        icon: "🥫",
        interactiveType: "soup-heat"
      },
      {
        id: "circuit-soldering",
        title: "Electronics Soldering Iron",
        desc: "Melting tin wire with a hot soldering pen glues computer chips and LED lights onto electronic circuit boards!",
        icon: "🛠️",
        interactiveType: "solder-connect"
      }
    ]
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    mass: 126.90,
    period: 5,
    group: 17,
    category: "halogen",
    phase: "Solid",
    shells: [2, 8, 18, 18, 7],
    character: {
      title: "The Purple Vapor Wizard",
      superpower: "Transforms from dark purple crystals directly into mystical violet smoke without melting!",
      avatarEmoji: "🟣",
      personality: "Mystical, disinfectant, keeps human thyroid glands running smoothly!",
      funFact: "Iodine sublimates: when heated, the dark crystals vanish directly into magnificent swirling violet clouds!",
      color: "#8b5cf6"
    },
    applications: [
      {
        id: "iodized-salt",
        title: "Iodized Salt for Healthy Brains",
        desc: "Table salt is enriched with tiny drops of iodine to help kids' brains and thyroid glands grow healthy and sharp!",
        icon: "🧂",
        interactiveType: "salt-sprinkle"
      },
      {
        id: "purple-antiseptic",
        title: "Doctor Antiseptic Scrapes",
        desc: "Nurses dab golden-brown iodine antiseptic over scraped knees to destroy germs before applying a band-aid!",
        icon: "🩹",
        interactiveType: "bandaid-apply"
      }
    ]
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    mass: 183.84,
    period: 6,
    group: 6,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 32, 12, 2],
    character: {
      title: "The Melting Master",
      superpower: "Highest melting point of ANY metal on Earth (3,422°C / 6,192°F)! Survived rocket nozzle flames.",
      avatarEmoji: "💡",
      personality: "Indomitable, heatproof, dense as gold, and never breaks a sweat in a volcanic furnace!",
      funFact: "Its chemical symbol 'W' comes from 'Wolfram'—a German mining name meaning 'wolf's froth'!",
      color: "#475569"
    },
    applications: [
      {
        id: "lightbulb-filament",
        title: "Glowing Lamp Filaments",
        desc: "Classic lightbulbs use coiled hair-thin tungsten wires that glow white-hot without melting for thousands of hours!",
        icon: "💡",
        interactiveType: "filament-glow"
      },
      {
        id: "rocket-nozzles",
        title: "Rocket Engine Heat Shields",
        desc: "Rocket exhaust nozzles endure temperatures hotter than magma; tungsten stands firm without buckling or vaporizing!",
        icon: "🚀",
        interactiveType: "rocket-nozzle-fire"
      }
    ]
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    mass: 195.08,
    period: 6,
    group: 10,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 32, 17, 1],
    character: {
      title: "The Clean Air Crusader",
      superpower: "Cleans toxic smog out of car exhausts and crafts eternal, scratch-resistant jewelry!",
      avatarEmoji: "💍",
      personality: "Noble, precious, serene, and works behind the scenes cleaning world air!",
      funFact: "All the platinum ever mined in human history would fit inside an average family living room!",
      color: "#cbd5e1"
    },
    applications: [
      {
        id: "catalytic-converter",
        title: "Car Exhaust Cleaners",
        desc: "Catalytic converters under cars use platinum to turn dangerous tailpipe exhaust fumes into harmless nitrogen and water!",
        icon: "🚗",
        interactiveType: "clean-exhaust"
      },
      {
        id: "platinum-rings",
        title: "Eternal Diamond Rings",
        desc: "Its heavy silver-white sheen never tarnishes or turns yellow, holding priceless diamonds securely forever!",
        icon: "💍",
        interactiveType: "ring-sparkle"
      }
    ]
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    mass: 196.97,
    period: 6,
    group: 11,
    category: "transition-metal",
    phase: "Solid",
    shells: [2, 8, 18, 32, 18, 1],
    character: {
      title: "The Crown King",
      superpower: "Never rusts or tarnishes, shields astronauts from harsh solar radiation, and can be hammered thinner than paper!",
      avatarEmoji: "👑",
      personality: "Royal, radiant, timeless, beloved across thousands of years of human history!",
      funFact: "A single ounce of gold can be hammered into a sheet so thin that it covers 100 square feet, or stretched into a 50-mile wire!",
      color: "#eab308"
    },
    applications: [
      {
        id: "astronaut-visors",
        title: "Astronaut Space Helmets",
        desc: "Astronaut helmet visors are coated with an ultra-thin film of real gold to reflect blinding solar heat and UV radiation away from their eyes!",
        icon: "👨‍🚀",
        interactiveType: "helmet-visor"
      },
      {
        id: "royal-crowns",
        title: "King & Queen Treasure Crowns",
        desc: "Gold crowns and necklaces found in ancient Egyptian pyramids still sparkle today just as brightly as 3,000 years ago!",
        icon: "👑",
        interactiveType: "crown-gleam"
      },
      {
        id: "smartphone-connectors",
        title: "Ultra-Fast Micro-Connectors",
        desc: "Inside every iPhone and gaming PC, tiny microscopic gold-plated pins transfer data at light speed without ever corroding!",
        icon: "📱",
        interactiveType: "connector-pulse"
      }
    ]
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    mass: 200.59,
    period: 6,
    group: 12,
    category: "transition-metal",
    phase: "Liquid",
    shells: [2, 8, 18, 32, 18, 2],
    character: {
      title: "The Quicksilver Dancer",
      superpower: "The ONLY metal on Earth that is a heavy silvery liquid at room temperature!",
      avatarEmoji: "🌡️",
      personality: "Slick, elusive, dense, named after the fleet-footed messenger of Roman mythology!",
      funFact: "Mercury is so dense (13.6 times heavier than water) that a heavy solid iron cannonball will float on top of a mercury bowl like a rubber duck!",
      color: "#94a3b8"
    },
    applications: [
      {
        id: "vintage-thermometer",
        title: "Classic Fever Thermometers",
        desc: "In vintage glass thermometers, liquid mercury smoothly expanded up the calibrated tube as body temperature rose!",
        icon: "🌡️",
        interactiveType: "thermometer-rise"
      },
      {
        id: "fluorescent-lights",
        title: "Classroom Fluorescent Tubes",
        desc: "Vaporized mercury inside overhead school light tubes energizes phosphors to flood classrooms with bright white study light!",
        icon: "💡",
        interactiveType: "fluorescent-flicker"
      }
    ]
  },
  {
    number: 82,
    symbol: "Pb",
    name: "Lead",
    mass: 207.2,
    period: 6,
    group: 14,
    category: "post-transition",
    phase: "Solid",
    shells: [2, 8, 18, 32, 18, 4],
    character: {
      title: "The Heavy Shield",
      superpower: "So dense that even medical X-rays cannot pass through it!",
      avatarEmoji: "🦺",
      personality: "Ultra-heavy, stoic, protective at dentist visits, but must be handled with care!",
      funFact: "When you visit the dentist for tooth X-rays, the heavy apron they place on your chest is lined with protective lead!",
      color: "#64748b"
    },
    applications: [
      {
        id: "xray-apron",
        title: "Dentist X-Ray Aprons",
        desc: "Protective lead vests block stray X-ray beams from passing through the rest of your body while your teeth are photographed!",
        icon: "🦺",
        interactiveType: "xray-shield"
      },
      {
        id: "car-starter-battery",
        title: "Car Starter Batteries",
        desc: "Heavy lead-acid batteries under car hoods deliver a massive jolt of electricity to crank over the engine when turning the ignition key!",
        icon: "🚗",
        interactiveType: "car-start"
      }
    ]
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    mass: 238.03,
    period: 7,
    group: null,
    category: "actinide",
    phase: "Solid",
    shells: [2, 8, 18, 32, 21, 9, 2],
    character: {
      title: "The Nuclear Giant",
      superpower: "Splits its atomic nucleus to generate immense heat that powers entire electric cities and glowing glass!",
      avatarEmoji: "☢️",
      personality: "Gigantic, intense, atomic powerhouse, named after the planet Uranus!",
      funFact: "A uranium fuel pellet the size of a gummy bear contains as much energy as 3 barrels of oil or 1 ton of coal!",
      color: "#22c55e"
    },
    applications: [
      {
        id: "nuclear-power",
        title: "Clean Nuclear Power Plants",
        desc: "Splitting uranium atoms in safe reactors boils water into high-pressure steam, turning huge turbine generators to power cities!",
        icon: "🏭",
        interactiveType: "turbine-spin"
      },
      {
        id: "vaseline-glass",
        title: "Vintage Glowing Vaseline Glass",
        desc: "Antique glassware with traces of uranium glows with a brilliant neon green color under ultraviolet blacklights!",
        icon: "🍸",
        interactiveType: "uv-glow"
      }
    ]
  }
];

// Helper database with baseline data for all 118 elements so table is 100% full & functional
const ALL_118_NAMES = [
  ["H", "Hydrogen", 1.008, 1, 1, "reactive-nonmetal", "Gas", [1]],
  ["He", "Helium", 4.0026, 1, 18, "noble-gas", "Gas", [2]],
  ["Li", "Lithium", 6.94, 2, 1, "alkali-metal", "Solid", [2, 1]],
  ["Be", "Beryllium", 9.0122, 2, 2, "alkaline-earth", "Solid", [2, 2]],
  ["B", "Boron", 10.81, 2, 13, "metalloid", "Solid", [2, 3]],
  ["C", "Carbon", 12.011, 2, 14, "reactive-nonmetal", "Solid", [2, 4]],
  ["N", "Nitrogen", 14.007, 2, 15, "reactive-nonmetal", "Gas", [2, 5]],
  ["O", "Oxygen", 15.999, 2, 16, "reactive-nonmetal", "Gas", [2, 6]],
  ["F", "Fluorine", 18.998, 2, 17, "halogen", "Gas", [2, 7]],
  ["Ne", "Neon", 20.180, 2, 18, "noble-gas", "Gas", [2, 8]],
  ["Na", "Sodium", 22.990, 3, 1, "alkali-metal", "Solid", [2, 8, 1]],
  ["Mg", "Magnesium", 24.305, 3, 2, "alkaline-earth", "Solid", [2, 8, 2]],
  ["Al", "Aluminum", 26.982, 3, 13, "post-transition", "Solid", [2, 8, 3]],
  ["Si", "Silicon", 28.085, 3, 14, "metalloid", "Solid", [2, 8, 4]],
  ["P", "Phosphorus", 30.974, 3, 15, "reactive-nonmetal", "Solid", [2, 8, 5]],
  ["S", "Sulfur", 32.06, 3, 16, "reactive-nonmetal", "Solid", [2, 8, 6]],
  ["Cl", "Chlorine", 35.45, 3, 17, "halogen", "Gas", [2, 8, 7]],
  ["Ar", "Argon", 39.948, 3, 18, "noble-gas", "Gas", [2, 8, 8]],
  ["K", "Potassium", 39.098, 4, 1, "alkali-metal", "Solid", [2, 8, 8, 1]],
  ["Ca", "Calcium", 40.078, 4, 2, "alkaline-earth", "Solid", [2, 8, 8, 2]],
  ["Sc", "Scandium", 44.956, 4, 3, "transition-metal", "Solid", [2, 8, 9, 2]],
  ["Ti", "Titanium", 47.867, 4, 4, "transition-metal", "Solid", [2, 8, 10, 2]],
  ["V", "Vanadium", 50.942, 4, 5, "transition-metal", "Solid", [2, 8, 11, 2]],
  ["Cr", "Chromium", 51.996, 4, 6, "transition-metal", "Solid", [2, 8, 13, 1]],
  ["Mn", "Manganese", 54.938, 4, 7, "transition-metal", "Solid", [2, 8, 13, 2]],
  ["Fe", "Iron", 55.845, 4, 8, "transition-metal", "Solid", [2, 8, 14, 2]],
  ["Co", "Cobalt", 58.933, 4, 9, "transition-metal", "Solid", [2, 8, 15, 2]],
  ["Ni", "Nickel", 58.693, 4, 10, "transition-metal", "Solid", [2, 8, 16, 2]],
  ["Cu", "Copper", 63.546, 4, 11, "transition-metal", "Solid", [2, 8, 18, 1]],
  ["Zn", "Zinc", 65.38, 4, 12, "transition-metal", "Solid", [2, 8, 18, 2]],
  ["Ga", "Gallium", 69.723, 4, 13, "post-transition", "Solid", [2, 8, 18, 3]],
  ["Ge", "Germanium", 72.63, 4, 14, "metalloid", "Solid", [2, 8, 18, 4]],
  ["As", "Arsenic", 74.922, 4, 15, "metalloid", "Solid", [2, 8, 18, 5]],
  ["Se", "Selenium", 78.971, 4, 16, "reactive-nonmetal", "Solid", [2, 8, 18, 6]],
  ["Br", "Bromine", 79.904, 4, 17, "halogen", "Liquid", [2, 8, 18, 7]],
  ["Kr", "Krypton", 83.798, 4, 18, "noble-gas", "Gas", [2, 8, 18, 8]],
  ["Rb", "Rubidium", 85.468, 5, 1, "alkali-metal", "Solid", [2, 8, 18, 8, 1]],
  ["Sr", "Strontium", 87.62, 5, 2, "alkaline-earth", "Solid", [2, 8, 18, 8, 2]],
  ["Y", "Yttrium", 88.906, 5, 3, "transition-metal", "Solid", [2, 8, 18, 9, 2]],
  ["Zr", "Zirconium", 91.224, 5, 4, "transition-metal", "Solid", [2, 8, 18, 10, 2]],
  ["Nb", "Niobium", 92.906, 5, 5, "transition-metal", "Solid", [2, 8, 18, 12, 1]],
  ["Mo", "Molybdenum", 95.95, 5, 6, "transition-metal", "Solid", [2, 8, 18, 13, 1]],
  ["Tc", "Technetium", 98, 5, 7, "transition-metal", "Synthetic", [2, 8, 18, 13, 2]],
  ["Ru", "Ruthenium", 101.07, 5, 8, "transition-metal", "Solid", [2, 8, 18, 15, 1]],
  ["Rh", "Rhodium", 102.91, 5, 9, "transition-metal", "Solid", [2, 8, 18, 16, 1]],
  ["Pd", "Palladium", 106.42, 5, 10, "transition-metal", "Solid", [2, 8, 18, 18]],
  ["Ag", "Silver", 107.87, 5, 11, "transition-metal", "Solid", [2, 8, 18, 18, 1]],
  ["Cd", "Cadmium", 112.41, 5, 12, "transition-metal", "Solid", [2, 8, 18, 18, 2]],
  ["In", "Indium", 114.82, 5, 13, "post-transition", "Solid", [2, 8, 18, 18, 3]],
  ["Sn", "Tin", 118.71, 5, 14, "post-transition", "Solid", [2, 8, 18, 18, 4]],
  ["Sb", "Antimony", 121.76, 5, 15, "metalloid", "Solid", [2, 8, 18, 18, 5]],
  ["Te", "Tellurium", 127.60, 5, 16, "metalloid", "Solid", [2, 8, 18, 18, 6]],
  ["I", "Iodine", 126.90, 5, 17, "halogen", "Solid", [2, 8, 18, 18, 7]],
  ["Xe", "Xenon", 131.29, 5, 18, "noble-gas", "Gas", [2, 8, 18, 18, 8]],
  ["Cs", "Cesium", 132.91, 6, 1, "alkali-metal", "Solid", [2, 8, 18, 18, 8, 1]],
  ["Ba", "Barium", 137.33, 6, 2, "alkaline-earth", "Solid", [2, 8, 18, 18, 8, 2]],
  ["La", "Lanthanum", 138.91, 6, 3, "lanthanide", "Solid", [2, 8, 18, 18, 9, 2]],
  ["Ce", "Cerium", 140.12, 6, null, "lanthanide", "Solid", [2, 8, 18, 19, 9, 2]],
  ["Pr", "Praseodymium", 140.91, 6, null, "lanthanide", "Solid", [2, 8, 18, 21, 8, 2]],
  ["Nd", "Neodymium", 144.24, 6, null, "lanthanide", "Solid", [2, 8, 18, 22, 8, 2]],
  ["Pm", "Promethium", 145, 6, null, "lanthanide", "Synthetic", [2, 8, 18, 23, 8, 2]],
  ["Sm", "Samarium", 150.36, 6, null, "lanthanide", "Solid", [2, 8, 18, 24, 8, 2]],
  ["Eu", "Europium", 151.96, 6, null, "lanthanide", "Solid", [2, 8, 18, 25, 8, 2]],
  ["Gd", "Gadolinium", 157.25, 6, null, "lanthanide", "Solid", [2, 8, 18, 25, 9, 2]],
  ["Tb", "Terbium", 158.93, 6, null, "lanthanide", "Solid", [2, 8, 18, 27, 8, 2]],
  ["Dy", "Dysprosium", 162.50, 6, null, "lanthanide", "Solid", [2, 8, 18, 28, 8, 2]],
  ["Ho", "Holmium", 164.93, 6, null, "lanthanide", "Solid", [2, 8, 18, 29, 8, 2]],
  ["Er", "Erbium", 167.26, 6, null, "lanthanide", "Solid", [2, 8, 18, 30, 8, 2]],
  ["Tm", "Thulium", 168.93, 6, null, "lanthanide", "Solid", [2, 8, 18, 31, 8, 2]],
  ["Yb", "Ytterbium", 173.05, 6, null, "lanthanide", "Solid", [2, 8, 18, 32, 8, 2]],
  ["Lu", "Lutetium", 174.97, 6, null, "lanthanide", "Solid", [2, 8, 18, 32, 9, 2]],
  ["Hf", "Hafnium", 178.49, 6, 4, "transition-metal", "Solid", [2, 8, 18, 32, 10, 2]],
  ["Ta", "Tantalum", 180.95, 6, 5, "transition-metal", "Solid", [2, 8, 18, 32, 11, 2]],
  ["W", "Tungsten", 183.84, 6, 6, "transition-metal", "Solid", [2, 8, 18, 32, 12, 2]],
  ["Re", "Rhenium", 186.21, 6, 7, "transition-metal", "Solid", [2, 8, 18, 32, 13, 2]],
  ["Os", "Osmium", 190.23, 6, 8, "transition-metal", "Solid", [2, 8, 18, 32, 14, 2]],
  ["Ir", "Iridium", 192.22, 6, 9, "transition-metal", "Solid", [2, 8, 18, 32, 15, 2]],
  ["Pt", "Platinum", 195.08, 6, 10, "transition-metal", "Solid", [2, 8, 18, 32, 17, 1]],
  ["Au", "Gold", 196.97, 6, 11, "transition-metal", "Solid", [2, 8, 18, 32, 18, 1]],
  ["Hg", "Mercury", 200.59, 6, 12, "transition-metal", "Liquid", [2, 8, 18, 32, 18, 2]],
  ["Tl", "Thallium", 204.38, 6, 13, "post-transition", "Solid", [2, 8, 18, 32, 18, 3]],
  ["Pb", "Lead", 207.2, 6, 14, "post-transition", "Solid", [2, 8, 18, 32, 18, 4]],
  ["Bi", "Bismuth", 208.98, 6, 15, "post-transition", "Solid", [2, 8, 18, 32, 18, 5]],
  ["Po", "Polonium", 209, 6, 16, "post-transition", "Solid", [2, 8, 18, 32, 18, 6]],
  ["At", "Astatine", 210, 6, 17, "halogen", "Solid", [2, 8, 18, 32, 18, 7]],
  ["Rn", "Radon", 222, 6, 18, "noble-gas", "Gas", [2, 8, 18, 32, 18, 8]],
  ["Fr", "Francium", 223, 7, 1, "alkali-metal", "Solid", [2, 8, 18, 32, 18, 8, 1]],
  ["Ra", "Radium", 226, 7, 2, "alkaline-earth", "Solid", [2, 8, 18, 32, 18, 8, 2]],
  ["Ac", "Actinium", 227, 7, 3, "actinide", "Solid", [2, 8, 18, 32, 18, 9, 2]],
  ["Th", "Thorium", 232.04, 7, null, "actinide", "Solid", [2, 8, 18, 32, 18, 10, 2]],
  ["Pa", "Protactinium", 231.04, 7, null, "actinide", "Solid", [2, 8, 18, 32, 20, 9, 2]],
  ["U", "Uranium", 238.03, 7, null, "actinide", "Solid", [2, 8, 18, 32, 21, 9, 2]],
  ["Np", "Neptunium", 237, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 22, 9, 2]],
  ["Pu", "Plutonium", 244, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 24, 8, 2]],
  ["Am", "Americium", 243, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 25, 8, 2]],
  ["Cm", "Curium", 247, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 25, 9, 2]],
  ["Bk", "Berkelium", 247, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 27, 8, 2]],
  ["Cf", "Californium", 251, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 28, 8, 2]],
  ["Es", "Einsteinium", 252, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 29, 8, 2]],
  ["Fm", "Fermium", 257, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 30, 8, 2]],
  ["Md", "Mendelevium", 258, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 31, 8, 2]],
  ["No", "Nobelium", 259, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 32, 8, 2]],
  ["Lr", "Lawrencium", 266, 7, null, "actinide", "Synthetic", [2, 8, 18, 32, 32, 8, 3]],
  ["Rf", "Rutherfordium", 267, 7, 4, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 10, 2]],
  ["Db", "Dubnium", 268, 7, 5, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 11, 2]],
  ["Sg", "Seaborgium", 269, 7, 6, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 12, 2]],
  ["Bh", "Bohrium", 270, 7, 7, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 13, 2]],
  ["Hs", "Hassium", 277, 7, 8, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 14, 2]],
  ["Mt", "Meitnerium", 278, 7, 9, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 15, 2]],
  ["Ds", "Darmstadtium", 281, 7, 10, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 16, 2]],
  ["Rg", "Roentgenium", 282, 7, 11, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 17, 2]],
  ["Cn", "Copernicium", 285, 7, 12, "transition-metal", "Synthetic", [2, 8, 18, 32, 32, 18, 2]],
  ["Nh", "Nihonium", 286, 7, 13, "post-transition", "Synthetic", [2, 8, 18, 32, 32, 18, 3]],
  ["Fl", "Flerovium", 289, 7, 14, "post-transition", "Synthetic", [2, 8, 18, 32, 32, 18, 4]],
  ["Mc", "Moscovium", 290, 7, 15, "post-transition", "Synthetic", [2, 8, 18, 32, 32, 18, 5]],
  ["Lv", "Livermorium", 293, 7, 16, "post-transition", "Synthetic", [2, 8, 18, 32, 32, 18, 6]],
  ["Ts", "Tennessine", 294, 7, 17, "halogen", "Synthetic", [2, 8, 18, 32, 32, 18, 7]],
  ["Og", "Oganesson", 294, 7, 18, "noble-gas", "Synthetic", [2, 8, 18, 32, 32, 18, 8]]
];

// Specific fun details for interesting elements that kids love
const EXTRA_ELEMENT_INFO = {
  38: {
    title: "The Firework Red Magician",
    superpower: "Turns 4th of July firework explosions into dazzling deep crimson red stars!",
    emoji: "🎆",
    fact: "Strontium compounds create the vivid pure red color in all festival fireworks!",
    apps: [
      { id: "red-firework", title: "Crimson Red Fireworks", desc: "When fireworks explode in red starry showers, strontium is putting on the show!", icon: "🎆", interactiveType: "firework-red" },
      { id: "glow-paint", title: "Glow-in-the-Dark Clock Hands", desc: "Strontium aluminate glows ten times brighter than old phosphors on bedroom clocks!", icon: "⏰", interactiveType: "clock-glow" }
    ]
  },
  54: {
    title: "The Ion Rocket Thruster",
    superpower: "Propels futuristic ion engines on deep space probes traveling to asteroids!",
    emoji: "🛸",
    fact: "NASA uses ionized xenon gas shot out of thrusters to push space probes through the solar system with ultra-smooth speed!",
    apps: [
      { id: "ion-engine", title: "Deep Space Ion Engines", desc: "Electric fields zap xenon atoms to shoot them backwards, gently nudging satellites across millions of miles!", icon: "🛸", interactiveType: "ion-thruster" },
      { id: "camera-flash", title: "Ultra-Bright Camera Flash", desc: "High-speed camera xenon flash tubes produce lightning-fast flashes to freeze hummingbirds mid-flap!", icon: "📸", interactiveType: "camera-snap" }
    ]
  },
  56: {
    title: "The Emerald Firework Alchemist",
    superpower: "Paints festival fireworks in bright apple green and helps hospital tummy X-rays!",
    emoji: "🍏",
    fact: "Doctors give patients a safe barium milkshake so their stomach and digestive tract show up bright white on medical X-rays!",
    apps: [
      { id: "green-fireworks", title: "Emerald Green Fireworks", desc: "Pyrotechnicians add barium chloride to make fireworks blossom in vivid emerald green hues!", icon: "🎆", interactiveType: "firework-green" },
      { id: "tummy-xray", title: "Hospital Tummy Scans", desc: "Barium drinks coat the digestive lining so doctors can easily inspect tummy health!", icon: "🏥", interactiveType: "xray-tummy" }
    ]
  },
  60: {
    title: "The Super-Magnet Champion",
    superpower: "Creates the most powerful permanent magnets on planet Earth!",
    emoji: "🧲",
    fact: "A neodymium magnet the size of a coin is strong enough to lift heavy iron tools!",
    apps: [
      { id: "super-magnet", title: "Neodymium Super Magnets", desc: "Tiny coin-sized neodymium magnets lock smartphone magnetic chargers and earphone speakers!", icon: "🎧", interactiveType: "magnet-attract" },
      { id: "wind-turbine", title: "Giant Green Wind Turbines", desc: "Tons of neodymium magnets inside coastal wind turbines generate clean electricity from sea breezes!", icon: "💨", interactiveType: "turbine-spin" }
    ]
  },
  83: {
    title: "The Rainbow Crystal Wonder",
    superpower: "Grows into futuristic rainbow-stepped crystals that look like alien cities!",
    emoji: "🌈",
    fact: "Bismuth is the active ingredient in soothing pink Pepto-Bismol tummy medicine!",
    apps: [
      { id: "rainbow-crystal", title: "Rainbow Hopper Crystals", desc: "Molten bismuth cools into iridescent stepped pyramid crystals reflecting every rainbow color!", icon: "💎", interactiveType: "gem-sparkle" },
      { id: "tummy-medicine", title: "Soothing Tummy Medicine", desc: "Bismuth subsalicylate calms upset tummies and indigestion safely!", icon: "🧴", interactiveType: "medicine-soothe" }
    ]
  },
  95: {
    title: "The Smoke Alarm Hero",
    superpower: "Guards your family against house fires by sniffing smoke particles in the air 24/7!",
    emoji: "🚨",
    fact: "Almost every home has a tiny speck of americium-241 inside the hallway smoke detector saving lives!",
    apps: [
      { id: "smoke-detector", title: "Home Smoke Alarms", desc: "Americium emits tiny alpha particles; when smoke drifts into the sensor, it breaks the circuit and sounds the alarm!", icon: "🚨", interactiveType: "alarm-ring" }
    ]
  }
};

// Category metadata for filters and styling
const categoryColors = {
  "alkali-metal": "#ef4444",
  "alkaline-earth": "#f97316",
  "transition-metal": "#eab308",
  "post-transition": "#22c55e",
  "metalloid": "#14b8a6",
  "reactive-nonmetal": "#0ea5e9",
  "halogen": "#a855f7",
  "noble-gas": "#ec4899",
  "lanthanide": "#8b5cf6",
  "actinide": "#f43f5e"
};

const CATEGORIES = {
  "alkali-metal": { label: "Alkali Metals", color: "#f87171", bgClass: "cat-alkali" },
  "alkaline-earth": { label: "Alkaline Earth", color: "#fb923c", bgClass: "cat-alkaline" },
  "transition-metal": { label: "Transition Metals", color: "#facc15", bgClass: "cat-transition" },
  "post-transition": { label: "Post-Transition", color: "#4ade80", bgClass: "cat-post-trans" },
  "metalloid": { label: "Metalloids", color: "#2dd4bf", bgClass: "cat-metalloid" },
  "reactive-nonmetal": { label: "Reactive Nonmetals", color: "#38bdf8", bgClass: "cat-nonmetal" },
  "halogen": { label: "Halogens", color: "#c084fc", bgClass: "cat-halogen" },
  "noble-gas": { label: "Noble Gases", color: "#f472b6", bgClass: "cat-noble" },
  "lanthanide": { label: "Lanthanides", color: "#a78bfa", bgClass: "cat-lanthanide" },
  "actinide": { label: "Actinides", color: "#fb7185", bgClass: "cat-actinide" }
};

// Build final consolidated dictionary of all 118 elements
const ALL_ELEMENTS = ALL_118_NAMES.map((item, index) => {
  const number = index + 1;
  const [symbol, name, mass, period, group, category, phase, shells] = item;
  
  // Check if we already wrote handcrafted rich info
  const existing = ELEMENTS.find(e => e.number === number);
  if (existing) {
    return existing;
  }

  // Check extra info
  const extra = EXTRA_ELEMENT_INFO[number];
  if (extra) {
    return {
      number,
      symbol,
      name,
      mass,
      period,
      group,
      category,
      phase,
      shells,
      character: {
        title: extra.title,
        superpower: extra.superpower,
        avatarEmoji: extra.emoji,
        personality: "High-tech, fascinating, and plays a unique role in science!",
        funFact: extra.fact,
        color: categoryColors[category] || "#6366f1"
      },
      applications: extra.apps
    };
  }

  // Default kid-friendly generated profile
  const categoryFriendlyTitles = {
    "alkali-metal": "The Lively Sparker",
    "alkaline-earth": "The Earthy Defender",
    "transition-metal": "The Sturdy Craftsman",
    "post-transition": "The Versatile Shaper",
    "metalloid": "The Silicon Ally",
    "reactive-nonmetal": "The Nature Weaver",
    "noble-gas": "The Cosmic Glow",
    "halogen": "The Reactive Ranger",
    "lanthanide": "The Rare Earth Pioneer",
    "actinide": "The Atomic Explorer"
  };

  const defaultTitle = categoryFriendlyTitles[category] || "The Mystery Explorer";
  const defaultEmoji = phase === "Gas" ? "💨" : phase === "Liquid" ? "💧" : "🔬";

  return {
    number,
    symbol,
    name,
    mass,
    period,
    group,
    category,
    phase,
    shells,
    character: {
      title: `${name}: ${defaultTitle}`,
      superpower: `A fascinating ${category.replace('-', ' ')} that scientists use in specialized laboratories and space research!`,
      avatarEmoji: defaultEmoji,
      personality: `Atomic Number ${number}! Found in period ${period} of the grand Periodic Table.`,
      funFact: `Atom #${number} has ${shells.reduce((a, b) => a + b, 0)} electrons orbiting around its dense proton-packed atomic core!`,
      color: categoryColors[category] || "#6366f1"
    },
    applications: [
      {
        id: `app-${number}-1`,
        title: `Scientific Research & Technology`,
        desc: `Physicists and chemists use ${name} to study atomic structures, quantum materials, and discover new advanced alloys!`,
        icon: "🔬",
        interactiveType: "science-lab"
      },
      {
        id: `app-${number}-2`,
        title: `Specialized High-Tech Uses`,
        desc: `Plays vital roles in cutting-edge electronics, laser research, and aerospace engineering!`,
        icon: "⚡",
        interactiveType: "tech-pulse"
      }
    ]
  };
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALL_ELEMENTS, CATEGORIES, categoryColors };
}
if (typeof window !== 'undefined') {
  window.ALL_ELEMENTS = ALL_ELEMENTS;
  window.CATEGORIES = CATEGORIES;
  window.categoryColors = categoryColors;
}
