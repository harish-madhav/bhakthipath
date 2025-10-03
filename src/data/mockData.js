// Mock data for gods and songs
export const gods = [
  {
    id: 1,
    name: "Shiva",
    emoji: "🕉️",
    description: "The Destroyer and Transformer"
  },
  {
    id: 2,
    name: "Vishnu",
    emoji: "✨",
    description: "The Preserver and Protector"
  },
  {
    id: 3,
    name: "Krishna",
    emoji: "🎶",
    description: "The Divine Flute Player"
  },
  {
    id: 4,
    name: "Hanuman",
    emoji: "💪",
    description: "The Devotee and Strength"
  },
  {
    id: 5,
    name: "Durga",
    emoji: "🦁",
    description: "The Divine Mother and Warrior"
  },
  {
    id: 6,
    name: "Ganesha",
    emoji: "🐘",
    description: "The Remover of Obstacles"
  }
];

export const songs = [
  {
    id: 1,
    god: "Shiva",
    title: "Om Namah Shivaya",
    lyrics: "ॐ नमः शिवाय\nॐ नमः शिवाय\nशिव शिव शिव शिव\nॐ नमः शिवाय",
    language: "Sanskrit"
  },
  {
    id: 2,
    god: "Shiva",
    title: "Shiva Tandava Stotram",
    lyrics: "जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम्\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम्",
    language: "Sanskrit"
  },
  {
    id: 3,
    god: "Krishna",
    title: "Hare Krishna Hare Rama",
    lyrics: "हरे कृष्ण हरे कृष्ण\nकृष्ण कृष्ण हरे हरे\nहरे राम हरे राम\nराम राम हरे हरे",
    language: "Sanskrit"
  },
  {
    id: 4,
    god: "Krishna",
    title: "Govind Bolo Hari Gopal Bolo",
    lyrics: "गोविन्द बोलो हरि गोपाल बोलो\nराधा रमण हरि गोपाल बोलो\nयशोदा नन्दन ब्रजजन रंजन\nयमुना तीर वन चारी बोलो",
    language: "Sanskrit"
  },
  {
    id: 5,
    god: "Hanuman",
    title: "Hanuman Chalisa",
    lyrics: "श्री गुरु चरण सरोज रज निज मनु मुकुर सुधारि\nबरनउं रघुबर बिमल जसु जो दायकु फल चारि\nबुद्धिहीन तनु जानिके सुमिरौं पवन कुमार\nबल बुद्धि बिद्या देहु मोहिं हरहु कलेश बिकार",
    language: "Sanskrit"
  },
  {
    id: 6,
    god: "Vishnu",
    title: "Vishnu Sahasranama",
    lyrics: "विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः",
    language: "Sanskrit"
  },
  {
    id: 7,
    god: "Durga",
    title: "Durga Chalisa",
    lyrics: "जय अम्बे गौरी मैया जय श्यामा गौरी\nतुमको निशदिन ध्यावत हरि ब्रह्मा शिवरी",
    language: "Sanskrit"
  },
  {
    id: 8,
    god: "Ganesha",
    title: "Ganpati Bappa Morya",
    lyrics: "गणपति बप्पा मोरया\nमंगल मूर्ति मोरया\nगणपति बप्पा मोरया\nपुड्या वरदा मोरया",
    language: "Sanskrit"
  }
];

// Helper function to get songs by god name
export const getSongsByGod = (godName) => {
  return songs.filter(song => song.god.toLowerCase() === godName.toLowerCase());
};

// Helper function to get god by name
export const getGodByName = (godName) => {
  return gods.find(god => god.name.toLowerCase() === godName.toLowerCase());
};
