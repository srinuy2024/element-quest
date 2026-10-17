// Real-World Body & Smartphone Explorer Data
// Shows kids exactly where elements live inside their own bodies and everyday tech!

const REAL_WORLD_MAPS = {
  body: {
    title: "Inside Your Amazing Body",
    subtitle: "Click any body part to discover the superpower elements keeping you alive!",
    icon: "🧍",
    targets: [
      {
        id: "brain",
        name: "Brain & Nerves",
        icon: "🧠",
        elements: ["Na", "K", "Ca"],
        elementNames: "Sodium, Potassium & Calcium",
        desc: "Sodium and Potassium pump across nerve cells like high-speed electrical telegraphs so your brain can think and react!",
        funFact: "Your brain generates enough electricity from sodium and potassium ions to power a tiny LED light bulb!"
      },
      {
        id: "lungs",
        name: "Lungs & Breathing",
        icon: "🫁",
        elements: ["O", "N"],
        elementNames: "Oxygen & Nitrogen",
        desc: "Every breath you take is 78% Nitrogen and 21% Oxygen! Your lungs absorb Oxygen molecules and exhale Carbon Dioxide.",
        funFact: "If you stretched out all the air sacs in your lungs, they would cover a whole tennis court!"
      },
      {
        id: "heart",
        name: "Heart & Red Blood Cells",
        icon: "❤️",
        elements: ["Fe", "O"],
        elementNames: "Iron & Oxygen",
        desc: "Millions of Iron atoms sit at the center of hemoglobin in your red blood cells, grabbing Oxygen to deliver to your muscles.",
        funFact: "Iron is what makes human blood bright red! (Crabs and octopuses have copper in their blood, making it blue!)."
      },
      {
        id: "bones",
        name: "Bones & Teeth",
        icon: "🦴",
        elements: ["Ca", "P", "Mg"],
        elementNames: "Calcium, Phosphorus & Magnesium",
        desc: "Calcium and Phosphorus lock into a rock-solid crystal mineral cage called hydroxyapatite to make your skeleton tough!",
        funFact: "Tooth enamel is the hardest substance in your entire body—even harder than steel!"
      },
      {
        id: "dna",
        name: "DNA & Genetic Code",
        icon: "🧬",
        elements: ["C", "H", "N", "O", "P"],
        elementNames: "Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus",
        desc: "Phosphorus forms the strong spiral backbone of your DNA ladder, while Carbon holds the code that makes you unique!",
        funFact: "If you unraveled all the DNA strands in your body, it would stretch from Earth to Pluto and back!"
      },
      {
        id: "muscles",
        name: "Muscles & Movement",
        icon: "💪",
        elements: ["Mg", "K", "Ca"],
        elementNames: "Magnesium, Potassium & Calcium",
        desc: "Calcium tells muscle fibers to contract and flex, while Magnesium tells them to relax so you don't get painful cramps.",
        funFact: "Eating bananas and leafy greens gives you the potassium and magnesium needed to sprint fast in gym class!"
      }
    ]
  },
  smartphone: {
    title: "Inside Your Smartphone",
    subtitle: "Over 30 different periodic elements are packed inside a single phone in your pocket!",
    icon: "📱",
    targets: [
      {
        id: "screen",
        name: "Touchscreen Glass",
        icon: "📲",
        elements: ["Si", "In", "Sn", "K"],
        elementNames: "Silicon, Indium, Tin & Potassium",
        desc: "Indium Tin Oxide is an invisible microscopic metallic coating that detects the tiny electrical charge from your finger when you tap!",
        funFact: "Smartphone glass is soaked in molten potassium salt baths to replace sodium atoms, making it shatter-resistant 'Gorilla Glass'!"
      },
      {
        id: "battery",
        name: "Rechargeable Battery",
        icon: "🔋",
        elements: ["Li", "Co", "C"],
        elementNames: "Lithium, Cobalt & Graphite",
        desc: "Lithium ions zoom back and forth between graphite sheets and cobalt electrodes to store and release phone battery juice.",
        funFact: "A smartphone battery can be recharged over 1,000 times before losing its superpower strength!"
      },
      {
        id: "chip",
        name: "Microprocessor & Logic Chip",
        icon: "💻",
        elements: ["Si", "Cu", "Au", "P"],
        elementNames: "Silicon, Copper, Gold & Phosphorus",
        desc: "Billions of microscopic transistors carved into silicon wafers calculate video game graphics at 3 billion ticks per second!",
        funFact: "Microscopic wires made of pure gold connect computer chips because gold never rusts or tarnishes!"
      },
      {
        id: "vibration",
        name: "Haptic Vibration Motor",
        icon: "📳",
        elements: ["Nd", "Fe", "B"],
        elementNames: "Neodymium, Iron & Boron",
        desc: "Tiny coin-sized super-magnets made of Neodymium spin an off-center weight to buzz your phone when you get a notification!",
        funFact: "Neodymium magnets are the strongest permanent magnets in the world—10 times stronger than fridge magnets!"
      },
      {
        id: "camera",
        name: "Camera Lenses & Sensors",
        icon: "📸",
        elements: ["Si", "Ge", "Ag"],
        elementNames: "Silicon, Germanium & Silver",
        desc: "Silicon digital photo-sensors capture photons of light and turn them into crisp 4K family photos and TikTok videos!",
        funFact: "Silver microscopic circuitry carries camera sensor data at lightning speed without lagging your video!"
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REAL_WORLD_MAPS };
}
if (typeof window !== 'undefined') {
  window.REAL_WORLD_MAPS = REAL_WORLD_MAPS;
}
