// Molecules & Chemical Reactions Database for ElementQuest Crafting Lab
// Kid-friendly compounds with balanced equations, animations, and real-world uses!

const MOLECULES_DATABASE = [
  {
    id: "water",
    name: "Water",
    formula: "H₂O",
    equation: "2H₂ + O₂ ➔ 2H₂O",
    ingredients: { "H": 2, "O": 1 },
    title: "Cool Refreshing Water",
    emoji: "💧",
    color: "#38bdf8",
    description: "Two Hydrogen atoms team up with one Oxygen atom to make cool, thirst-quenching water! It covers 70% of Earth and makes up over half your body.",
    funFact: "Water is the ONLY natural substance on Earth found abundantly as a solid (ice), liquid (water), and gas (clouds/steam)!",
    animationType: "water-splash"
  },
  {
    id: "salt",
    name: "Table Salt",
    formula: "NaCl",
    equation: "2Na + Cl₂ ➔ 2NaCl",
    ingredients: { "Na": 1, "Cl": 1 },
    title: "Tasty Table Salt",
    emoji: "🧂",
    color: "#facc15",
    description: "Combining explosive Sodium metal with stinging Chlorine gas creates crunchy, delicious salt for french fries and popcorn!",
    funFact: "Ancient Roman soldiers were sometimes paid in salt! That is where the word 'salary' comes from.",
    animationType: "salt-sparkle"
  },
  {
    id: "carbon-dioxide",
    name: "Carbon Dioxide",
    formula: "CO₂",
    equation: "C + O₂ ➔ CO₂",
    ingredients: { "C": 1, "O": 2 },
    title: "Fizzy Soda Gas",
    emoji: "🥤",
    color: "#a855f7",
    description: "One Carbon atom hooks up with two Oxygen atoms. It traps fizzy bubbles inside soda cans and is what your lungs exhale every breath!",
    funFact: "Frozen carbon dioxide is called 'Dry Ice'! Instead of melting into liquid, it sublimates directly into spooky white fog.",
    animationType: "soda-fizz"
  },
  {
    id: "rust",
    name: "Iron Rust",
    formula: "Fe₂O₃",
    equation: "4Fe + 3O₂ ➔ 2Fe₂O₃",
    ingredients: { "Fe": 2, "O": 3 },
    title: "Rusty Orange Metal",
    emoji: "🧲",
    color: "#ea580c",
    description: "When shiny iron metal gets left out in damp air, oxygen attacks it to form crumbly reddish-orange rust!",
    funFact: "Planet Mars looks red from telescopes because its whole surface is covered in iron oxide (rust) dust!",
    animationType: "rust-flake"
  },
  {
    id: "sand-glass",
    name: "Silicon Dioxide (Glass & Sand)",
    formula: "SiO₂",
    equation: "Si + O₂ ➔ SiO₂",
    ingredients: { "Si": 1, "O": 2 },
    title: "Clear Window Glass & Sand",
    emoji: "🏖️",
    color: "#06b6d4",
    description: "Ordinary beach sand is silica! Melting sand at scorching 1,700°C temperatures cools into transparent crystal window glass.",
    funFact: "Lightning striking a sandy beach can instantly fuse silica into glass tubes called fulgurites!",
    animationType: "glass-sparkle"
  },
  {
    id: "elephant-toothpaste",
    name: "Hydrogen Peroxide",
    formula: "H₂O₂",
    equation: "2H₂ + 2O₂ ➔ 2H₂O₂",
    ingredients: { "H": 2, "O": 2 },
    title: "Elephant Toothpaste Monster",
    emoji: "🐘",
    color: "#ec4899",
    description: "Contains one extra oxygen atom than water. When catalyzed with dish soap, it erupts into gigantic mountain-sized foam!",
    funFact: "The famous 'Elephant Toothpaste' school experiment shoots hot soapy foam 10 feet up into the air!",
    animationType: "foam-blast"
  },
  {
    id: "baking-soda",
    name: "Baking Soda",
    formula: "NaHCO₃",
    equation: "Na + H + C + 3O ➔ NaHCO₃",
    ingredients: { "Na": 1, "H": 1, "C": 1, "O": 3 },
    title: "Volcano Eruption Powder",
    emoji: "🌋",
    color: "#ef4444",
    description: "Sodium Bicarbonate! When you pour vinegar over it in science class, it instantly bubbles into red volcanic magma lava!",
    funFact: "Baking soda also makes chocolate chip cookies rise into puffy, chewy treats in the kitchen oven!",
    animationType: "volcano-lava"
  },
  {
    id: "chalk",
    name: "Calcium Carbonate",
    formula: "CaCO₃",
    equation: "Ca + C + 3O ➔ CaCO₃",
    ingredients: { "Ca": 1, "C": 1, "O": 3 },
    title: "Blackboard Chalk & Seashells",
    emoji: "🐚",
    color: "#10b981",
    description: "Calcium binds with carbon and oxygen to form ocean clam shells, dinosaur fossils, and the white chalk sticks teachers use in school!",
    funFact: "The towering white Cliffs of Dover in England are made of billions of microscopic prehistoric seashells of calcium carbonate!",
    animationType: "chalk-art"
  },
  {
    id: "methane",
    name: "Methane Gas",
    formula: "CH₄",
    equation: "C + 4H ➔ CH₄",
    ingredients: { "C": 1, "H": 4 },
    title: "Kitchen Stove Gas (Cow Burp!)",
    emoji: "🐮",
    color: "#65a30d",
    description: "One Carbon surrounded by four Hydrogen atoms. It fuels clean home cooking flames, and is famously produced when farm cows burp!",
    funFact: "Saturn's giant moon Titan has whole rivers, lakes, and rainstorms made of freezing liquid methane!",
    animationType: "blue-flame"
  },
  {
    id: "ammonia",
    name: "Ammonia",
    formula: "NH₃",
    equation: "N₂ + 3H₂ ➔ 2NH₃",
    ingredients: { "N": 1, "H": 3 },
    title: "Streak-Free Window Cleaner",
    emoji: "🪟",
    color: "#6366f1",
    description: "Nitrogen and Hydrogen team up to make powerful cleaning sprays that leave glass mirrors sparkling clean!",
    funFact: "Ammonia is also converted into plant fertilizers that feed over half the crops grown on planet Earth!",
    animationType: "sparkle-clean"
  },
  {
    id: "pyrite",
    name: "Fool's Gold (Pyrite)",
    formula: "FeS₂",
    equation: "Fe + 2S ➔ FeS₂",
    ingredients: { "Fe": 1, "S": 2 },
    title: "Glittering Fool's Gold",
    emoji: "🪙",
    color: "#eab308",
    description: "Iron binds with sulfur into glittering cubic crystals that look so much like real gold they tricked wild-west gold miners!",
    funFact: "Unlike real soft bendy gold, hitting Fool's Gold with a steel hammer will throw brilliant sparks of fire!",
    animationType: "gold-spark"
  },
  {
    id: "tooth-shield",
    name: "Sodium Fluoride",
    formula: "NaF",
    equation: "Na + F ➔ NaF",
    ingredients: { "Na": 1, "F": 1 },
    title: "Toothpaste Cavity Shield",
    emoji: "🦷",
    color: "#14b8a6",
    description: "The hero inside your morning toothpaste! It coats tooth enamel in superhero armor so cavity acid bugs slide right off.",
    funFact: "Brushing with fluoride remineralizes weak spots on teeth before they can ever turn into painful cavities!",
    animationType: "shield-gleam"
  },
  {
    id: "slime",
    name: "Gooey Stretchy Slime",
    formula: "B-C-H-O",
    equation: "Boron + Glue Polymers ➔ Stretchy Slime",
    ingredients: { "B": 1, "C": 1, "H": 2, "O": 1 },
    title: "Super-Bouncy Lab Slime",
    emoji: "🧪",
    color: "#84cc16",
    description: "Boron cross-links slippery glue polymer chains together, turning runny liquid glue into gooey satisfying stretchable slime!",
    funFact: "Slime is a 'Non-Newtonian fluid'—if you squeeze it fast it turns firm, but if you hold it gently it oozes like honey!",
    animationType: "slime-bounce"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MOLECULES_DATABASE };
}
if (typeof window !== 'undefined') {
  window.MOLECULES_DATABASE = MOLECULES_DATABASE;
}
