/**
 * ALICE ESL Phonics P5 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 09
 * 主題：Digraph Sounds & Days of the Week
 */

const P5_VOCABULARY = [
  {
    "id": "Friday",
    "word": "Friday",
    "zh": "Friday",
    "image": "P5_flashcards_images/P5_Friday.webp",
    "audioEn": "P5_flashcards_audios/P5_Friday.mp3",
    "audioZh": "P5_flashcards_audios/P5_Friday_zh.mp3"
  },
  {
    "id": "Hubbard",
    "word": "Hubbard",
    "zh": "Hubbard",
    "image": "P5_flashcards_images/P5_Hubbard.webp",
    "audioEn": "P5_flashcards_audios/P5_Hubbard.mp3",
    "audioZh": "P5_flashcards_audios/P5_Hubbard_zh.mp3"
  },
  {
    "id": "Jean",
    "word": "Jean",
    "zh": "Jean",
    "image": "P5_flashcards_images/P5_Jean.webp",
    "audioEn": "P5_flashcards_audios/P5_Jean.mp3",
    "audioZh": "P5_flashcards_audios/P5_Jean_zh.mp3"
  },
  {
    "id": "Monday",
    "word": "Monday",
    "zh": "Monday",
    "image": "P5_flashcards_images/P5_Monday.webp",
    "audioEn": "P5_flashcards_audios/P5_Monday.mp3",
    "audioZh": "P5_flashcards_audios/P5_Monday_zh.mp3"
  },
  {
    "id": "Saturday",
    "word": "Saturday",
    "zh": "Saturday",
    "image": "P5_flashcards_images/P5_Saturday.webp",
    "audioEn": "P5_flashcards_audios/P5_Saturday.mp3",
    "audioZh": "P5_flashcards_audios/P5_Saturday_zh.mp3"
  },
  {
    "id": "ant",
    "word": "ant",
    "zh": "ant",
    "image": "P5_flashcards_images/P5_ant.webp",
    "audioEn": "P5_flashcards_audios/P5_ant.mp3",
    "audioZh": "P5_flashcards_audios/P5_ant_zh.mp3"
  },
  {
    "id": "aunt",
    "word": "aunt",
    "zh": "aunt",
    "image": "P5_flashcards_images/P5_aunt.webp",
    "audioEn": "P5_flashcards_audios/P5_aunt.mp3",
    "audioZh": "P5_flashcards_audios/P5_aunt_zh.mp3"
  },
  {
    "id": "bakery",
    "word": "bakery",
    "zh": "bakery",
    "image": "P5_flashcards_images/P5_bakery.webp",
    "audioEn": "P5_flashcards_audios/P5_bakery.mp3",
    "audioZh": "P5_flashcards_audios/P5_bakery_zh.mp3"
  },
  {
    "id": "bank",
    "word": "bank",
    "zh": "bank",
    "image": "P5_flashcards_images/P5_bank.webp",
    "audioEn": "P5_flashcards_audios/P5_bank.mp3",
    "audioZh": "P5_flashcards_audios/P5_bank_zh.mp3"
  },
  {
    "id": "be still",
    "word": "be still",
    "zh": "be still",
    "image": "P5_flashcards_images/P5_be still.webp",
    "audioEn": "P5_flashcards_audios/P5_be still.mp3",
    "audioZh": "P5_flashcards_audios/P5_be still_zh.mp3"
  },
  {
    "id": "beach",
    "word": "beach",
    "zh": "beach",
    "image": "P5_flashcards_images/P5_beach.webp",
    "audioEn": "P5_flashcards_audios/P5_beach.mp3",
    "audioZh": "P5_flashcards_audios/P5_beach_zh.mp3"
  },
  {
    "id": "bear",
    "word": "bear",
    "zh": "bear",
    "image": "P5_flashcards_images/P5_bear.webp",
    "audioEn": "P5_flashcards_audios/P5_bear.mp3",
    "audioZh": "P5_flashcards_audios/P5_bear_zh.mp3"
  },
  {
    "id": "bed",
    "word": "bed",
    "zh": "bed",
    "image": "P5_flashcards_images/P5_bed.webp",
    "audioEn": "P5_flashcards_audios/P5_bed.mp3",
    "audioZh": "P5_flashcards_audios/P5_bed_zh.mp3"
  },
  {
    "id": "bird",
    "word": "bird",
    "zh": "bird",
    "image": "P5_flashcards_images/P5_bird.webp",
    "audioEn": "P5_flashcards_audios/P5_bird.mp3",
    "audioZh": "P5_flashcards_audios/P5_bird_zh.mp3"
  },
  {
    "id": "blow",
    "word": "blow",
    "zh": "blow",
    "image": "P5_flashcards_images/P5_blow.webp",
    "audioEn": "P5_flashcards_audios/P5_blow.mp3",
    "audioZh": "P5_flashcards_audios/P5_blow_zh.mp3"
  },
  {
    "id": "blue",
    "word": "blue",
    "zh": "blue",
    "image": "P5_flashcards_images/P5_blue.webp",
    "audioEn": "P5_flashcards_audios/P5_blue.mp3",
    "audioZh": "P5_flashcards_audios/P5_blue_zh.mp3"
  },
  {
    "id": "boat",
    "word": "boat",
    "zh": "boat",
    "image": "P5_flashcards_images/P5_boat.webp",
    "audioEn": "P5_flashcards_audios/P5_boat.mp3",
    "audioZh": "P5_flashcards_audios/P5_boat_zh.mp3"
  },
  {
    "id": "books",
    "word": "books",
    "zh": "books",
    "image": "P5_flashcards_images/P5_books.webp",
    "audioEn": "P5_flashcards_audios/P5_books.mp3",
    "audioZh": "P5_flashcards_audios/P5_books_zh.mp3"
  },
  {
    "id": "boots",
    "word": "boots",
    "zh": "boots",
    "image": "P5_flashcards_images/P5_boots.webp",
    "audioEn": "P5_flashcards_audios/P5_boots.mp3",
    "audioZh": "P5_flashcards_audios/P5_boots_zh.mp3"
  },
  {
    "id": "bread",
    "word": "bread",
    "zh": "bread",
    "image": "P5_flashcards_images/P5_bread.webp",
    "audioEn": "P5_flashcards_audios/P5_bread.mp3",
    "audioZh": "P5_flashcards_audios/P5_bread_zh.mp3"
  },
  {
    "id": "breakfast",
    "word": "breakfast",
    "zh": "breakfast",
    "image": "P5_flashcards_images/P5_breakfast.webp",
    "audioEn": "P5_flashcards_audios/P5_breakfast.mp3",
    "audioZh": "P5_flashcards_audios/P5_breakfast_zh.mp3"
  },
  {
    "id": "brother",
    "word": "brother",
    "zh": "brother",
    "image": "P5_flashcards_images/P5_brother.webp",
    "audioEn": "P5_flashcards_audios/P5_brother.mp3",
    "audioZh": "P5_flashcards_audios/P5_brother_zh.mp3"
  },
  {
    "id": "brown",
    "word": "brown",
    "zh": "brown",
    "image": "P5_flashcards_images/P5_brown.webp",
    "audioEn": "P5_flashcards_audios/P5_brown.mp3",
    "audioZh": "P5_flashcards_audios/P5_brown_zh.mp3"
  },
  {
    "id": "bus",
    "word": "bus",
    "zh": "bus",
    "image": "P5_flashcards_images/P5_bus.webp",
    "audioEn": "P5_flashcards_audios/P5_bus.mp3",
    "audioZh": "P5_flashcards_audios/P5_bus_zh.mp3"
  },
  {
    "id": "cake",
    "word": "cake",
    "zh": "cake",
    "image": "P5_flashcards_images/P5_cake.webp",
    "audioEn": "P5_flashcards_audios/P5_cake.mp3",
    "audioZh": "P5_flashcards_audios/P5_cake_zh.mp3"
  },
  {
    "id": "camp",
    "word": "camp",
    "zh": "camp",
    "image": "P5_flashcards_images/P5_camp.webp",
    "audioEn": "P5_flashcards_audios/P5_camp.mp3",
    "audioZh": "P5_flashcards_audios/P5_camp_zh.mp3"
  },
  {
    "id": "chew",
    "word": "chew",
    "zh": "chew",
    "image": "P5_flashcards_images/P5_chew.webp",
    "audioEn": "P5_flashcards_audios/P5_chew.mp3",
    "audioZh": "P5_flashcards_audios/P5_chew_zh.mp3"
  },
  {
    "id": "chicks",
    "word": "chicks",
    "zh": "chicks",
    "image": "P5_flashcards_images/P5_chicks.webp",
    "audioEn": "P5_flashcards_audios/P5_chicks.mp3",
    "audioZh": "P5_flashcards_audios/P5_chicks_zh.mp3"
  },
  {
    "id": "clocks",
    "word": "clocks",
    "zh": "clocks",
    "image": "P5_flashcards_images/P5_clocks.webp",
    "audioEn": "P5_flashcards_audios/P5_clocks.mp3",
    "audioZh": "P5_flashcards_audios/P5_clocks_zh.mp3"
  },
  {
    "id": "cloud",
    "word": "cloud",
    "zh": "cloud",
    "image": "P5_flashcards_images/P5_cloud.webp",
    "audioEn": "P5_flashcards_audios/P5_cloud.mp3",
    "audioZh": "P5_flashcards_audios/P5_cloud_zh.mp3"
  },
  {
    "id": "cook",
    "word": "cook",
    "zh": "cook",
    "image": "P5_flashcards_images/P5_cook.webp",
    "audioEn": "P5_flashcards_audios/P5_cook.mp3",
    "audioZh": "P5_flashcards_audios/P5_cook_zh.mp3"
  },
  {
    "id": "cow",
    "word": "cow",
    "zh": "cow",
    "image": "P5_flashcards_images/P5_cow.webp",
    "audioEn": "P5_flashcards_audios/P5_cow.mp3",
    "audioZh": "P5_flashcards_audios/P5_cow_zh.mp3"
  },
  {
    "id": "crown",
    "word": "crown",
    "zh": "crown",
    "image": "P5_flashcards_images/P5_crown.webp",
    "audioEn": "P5_flashcards_audios/P5_crown.mp3",
    "audioZh": "P5_flashcards_audios/P5_crown_zh.mp3"
  },
  {
    "id": "cube",
    "word": "cube",
    "zh": "cube",
    "image": "P5_flashcards_images/P5_cube.webp",
    "audioEn": "P5_flashcards_audios/P5_cube.mp3",
    "audioZh": "P5_flashcards_audios/P5_cube_zh.mp3"
  },
  {
    "id": "cupboard",
    "word": "cupboard",
    "zh": "cupboard",
    "image": "P5_flashcards_images/P5_cupboard.webp",
    "audioEn": "P5_flashcards_audios/P5_cupboard.mp3",
    "audioZh": "P5_flashcards_audios/P5_cupboard_zh.mp3"
  },
  {
    "id": "dew",
    "word": "dew",
    "zh": "dew",
    "image": "P5_flashcards_images/P5_dew.webp",
    "audioEn": "P5_flashcards_audios/P5_dew.mp3",
    "audioZh": "P5_flashcards_audios/P5_dew_zh.mp3"
  },
  {
    "id": "dish",
    "word": "dish",
    "zh": "dish",
    "image": "P5_flashcards_images/P5_dish.webp",
    "audioEn": "P5_flashcards_audios/P5_dish.mp3",
    "audioZh": "P5_flashcards_audios/P5_dish_zh.mp3"
  },
  {
    "id": "dog",
    "word": "dog",
    "zh": "dog",
    "image": "P5_flashcards_images/P5_dog.webp",
    "audioEn": "P5_flashcards_audios/P5_dog.mp3",
    "audioZh": "P5_flashcards_audios/P5_dog_zh.mp3"
  },
  {
    "id": "drink",
    "word": "drink",
    "zh": "drink",
    "image": "P5_flashcards_images/P5_drink.webp",
    "audioEn": "P5_flashcards_audios/P5_drink.mp3",
    "audioZh": "P5_flashcards_audios/P5_drink_zh.mp3"
  },
  {
    "id": "ducks",
    "word": "ducks",
    "zh": "ducks",
    "image": "P5_flashcards_images/P5_ducks.webp",
    "audioEn": "P5_flashcards_audios/P5_ducks.mp3",
    "audioZh": "P5_flashcards_audios/P5_ducks_zh.mp3"
  },
  {
    "id": "dump",
    "word": "dump",
    "zh": "dump",
    "image": "P5_flashcards_images/P5_dump.webp",
    "audioEn": "P5_flashcards_audios/P5_dump.mp3",
    "audioZh": "P5_flashcards_audios/P5_dump_zh.mp3"
  },
  {
    "id": "eat",
    "word": "eat",
    "zh": "eat",
    "image": "P5_flashcards_images/P5_eat.webp",
    "audioEn": "P5_flashcards_audios/P5_eat.mp3",
    "audioZh": "P5_flashcards_audios/P5_eat_zh.mp3"
  },
  {
    "id": "egg",
    "word": "egg",
    "zh": "egg",
    "image": "P5_flashcards_images/P5_egg.webp",
    "audioEn": "P5_flashcards_audios/P5_egg.mp3",
    "audioZh": "P5_flashcards_audios/P5_egg_zh.mp3"
  },
  {
    "id": "face",
    "word": "face",
    "zh": "face",
    "image": "P5_flashcards_images/P5_face.webp",
    "audioEn": "P5_flashcards_audios/P5_face.mp3",
    "audioZh": "P5_flashcards_audios/P5_face_zh.mp3"
  },
  {
    "id": "father",
    "word": "father",
    "zh": "father",
    "image": "P5_flashcards_images/P5_father.webp",
    "audioEn": "P5_flashcards_audios/P5_father.mp3",
    "audioZh": "P5_flashcards_audios/P5_father_zh.mp3"
  },
  {
    "id": "feeding",
    "word": "feeding",
    "zh": "feeding",
    "image": "P5_flashcards_images/P5_feeding.webp",
    "audioEn": "P5_flashcards_audios/P5_feeding.mp3",
    "audioZh": "P5_flashcards_audios/P5_feeding_zh.mp3"
  },
  {
    "id": "float",
    "word": "float",
    "zh": "float",
    "image": "P5_flashcards_images/P5_float.webp",
    "audioEn": "P5_flashcards_audios/P5_float.mp3",
    "audioZh": "P5_flashcards_audios/P5_float_zh.mp3"
  },
  {
    "id": "flower",
    "word": "flower",
    "zh": "flower",
    "image": "P5_flashcards_images/P5_flower.webp",
    "audioEn": "P5_flashcards_audios/P5_flower.mp3",
    "audioZh": "P5_flashcards_audios/P5_flower_zh.mp3"
  },
  {
    "id": "fly",
    "word": "fly",
    "zh": "fly",
    "image": "P5_flashcards_images/P5_fly.webp",
    "audioEn": "P5_flashcards_audios/P5_fly.mp3",
    "audioZh": "P5_flashcards_audios/P5_fly_zh.mp3"
  },
  {
    "id": "food",
    "word": "food",
    "zh": "food",
    "image": "P5_flashcards_images/P5_food.webp",
    "audioEn": "P5_flashcards_audios/P5_food.mp3",
    "audioZh": "P5_flashcards_audios/P5_food_zh.mp3"
  },
  {
    "id": "funny",
    "word": "funny",
    "zh": "funny",
    "image": "P5_flashcards_images/P5_funny.webp",
    "audioEn": "P5_flashcards_audios/P5_funny.mp3",
    "audioZh": "P5_flashcards_audios/P5_funny_zh.mp3"
  },
  {
    "id": "goat",
    "word": "goat",
    "zh": "goat",
    "image": "P5_flashcards_images/P5_goat.webp",
    "audioEn": "P5_flashcards_audios/P5_goat.mp3",
    "audioZh": "P5_flashcards_audios/P5_goat_zh.mp3"
  },
  {
    "id": "good",
    "word": "good",
    "zh": "good",
    "image": "P5_flashcards_images/P5_good.webp",
    "audioEn": "P5_flashcards_audios/P5_good.mp3",
    "audioZh": "P5_flashcards_audios/P5_good_zh.mp3"
  },
  {
    "id": "green",
    "word": "green",
    "zh": "green",
    "image": "P5_flashcards_images/P5_green.webp",
    "audioEn": "P5_flashcards_audios/P5_green.mp3",
    "audioZh": "P5_flashcards_audios/P5_green_zh.mp3"
  },
  {
    "id": "hand",
    "word": "hand",
    "zh": "hand",
    "image": "P5_flashcards_images/P5_hand.webp",
    "audioEn": "P5_flashcards_audios/P5_hand.mp3",
    "audioZh": "P5_flashcards_audios/P5_hand_zh.mp3"
  },
  {
    "id": "hanging",
    "word": "hanging",
    "zh": "hanging",
    "image": "P5_flashcards_images/P5_hanging.webp",
    "audioEn": "P5_flashcards_audios/P5_hanging.mp3",
    "audioZh": "P5_flashcards_audios/P5_hanging_zh.mp3"
  },
  {
    "id": "hard",
    "word": "hard",
    "zh": "hard",
    "image": "P5_flashcards_images/P5_hard.webp",
    "audioEn": "P5_flashcards_audios/P5_hard.mp3",
    "audioZh": "P5_flashcards_audios/P5_hard_zh.mp3"
  },
  {
    "id": "hat",
    "word": "hat",
    "zh": "hat",
    "image": "P5_flashcards_images/P5_hat.webp",
    "audioEn": "P5_flashcards_audios/P5_hat.mp3",
    "audioZh": "P5_flashcards_audios/P5_hat_zh.mp3"
  },
  {
    "id": "he",
    "word": "he",
    "zh": "he",
    "image": "P5_flashcards_images/P5_he.webp",
    "audioEn": "P5_flashcards_audios/P5_he.mp3",
    "audioZh": "P5_flashcards_audios/P5_he_zh.mp3"
  },
  {
    "id": "head",
    "word": "head",
    "zh": "head",
    "image": "P5_flashcards_images/P5_head.webp",
    "audioEn": "P5_flashcards_audios/P5_head.mp3",
    "audioZh": "P5_flashcards_audios/P5_head_zh.mp3"
  },
  {
    "id": "high",
    "word": "high",
    "zh": "high",
    "image": "P5_flashcards_images/P5_high.webp",
    "audioEn": "P5_flashcards_audios/P5_high.mp3",
    "audioZh": "P5_flashcards_audios/P5_high_zh.mp3"
  },
  {
    "id": "hooks",
    "word": "hooks",
    "zh": "hooks",
    "image": "P5_flashcards_images/P5_hooks.webp",
    "audioEn": "P5_flashcards_audios/P5_hooks.mp3",
    "audioZh": "P5_flashcards_audios/P5_hooks_zh.mp3"
  },
  {
    "id": "hop",
    "word": "hop",
    "zh": "hop",
    "image": "P5_flashcards_images/P5_hop.webp",
    "audioEn": "P5_flashcards_audios/P5_hop.mp3",
    "audioZh": "P5_flashcards_audios/P5_hop_zh.mp3"
  },
  {
    "id": "how",
    "word": "how",
    "zh": "how",
    "image": "P5_flashcards_images/P5_how.webp",
    "audioEn": "P5_flashcards_audios/P5_how.mp3",
    "audioZh": "P5_flashcards_audios/P5_how_zh.mp3"
  },
  {
    "id": "ink",
    "word": "ink",
    "zh": "ink",
    "image": "P5_flashcards_images/P5_ink.webp",
    "audioEn": "P5_flashcards_audios/P5_ink.mp3",
    "audioZh": "P5_flashcards_audios/P5_ink_zh.mp3"
  },
  {
    "id": "jeans",
    "word": "jeans",
    "zh": "jeans",
    "image": "P5_flashcards_images/P5_jeans.webp",
    "audioEn": "P5_flashcards_audios/P5_jeans.mp3",
    "audioZh": "P5_flashcards_audios/P5_jeans_zh.mp3"
  },
  {
    "id": "jump",
    "word": "jump",
    "zh": "jump",
    "image": "P5_flashcards_images/P5_jump.webp",
    "audioEn": "P5_flashcards_audios/P5_jump.mp3",
    "audioZh": "P5_flashcards_audios/P5_jump_zh.mp3"
  },
  {
    "id": "kick",
    "word": "kick",
    "zh": "kick",
    "image": "P5_flashcards_images/P5_kick.webp",
    "audioEn": "P5_flashcards_audios/P5_kick.mp3",
    "audioZh": "P5_flashcards_audios/P5_kick_zh.mp3"
  },
  {
    "id": "lamp",
    "word": "lamp",
    "zh": "lamp",
    "image": "P5_flashcards_images/P5_lamp.webp",
    "audioEn": "P5_flashcards_audios/P5_lamp.mp3",
    "audioZh": "P5_flashcards_audios/P5_lamp_zh.mp3"
  },
  {
    "id": "licking",
    "word": "licking",
    "zh": "licking",
    "image": "P5_flashcards_images/P5_licking.webp",
    "audioEn": "P5_flashcards_audios/P5_licking.mp3",
    "audioZh": "P5_flashcards_audios/P5_licking_zh.mp3"
  },
  {
    "id": "look",
    "word": "look",
    "zh": "look",
    "image": "P5_flashcards_images/P5_look.webp",
    "audioEn": "P5_flashcards_audios/P5_look.mp3",
    "audioZh": "P5_flashcards_audios/P5_look_zh.mp3"
  },
  {
    "id": "loud",
    "word": "loud",
    "zh": "loud",
    "image": "P5_flashcards_images/P5_loud.webp",
    "audioEn": "P5_flashcards_audios/P5_loud.mp3",
    "audioZh": "P5_flashcards_audios/P5_loud_zh.mp3"
  },
  {
    "id": "low",
    "word": "low",
    "zh": "low",
    "image": "P5_flashcards_images/P5_low.webp",
    "audioEn": "P5_flashcards_audios/P5_low.mp3",
    "audioZh": "P5_flashcards_audios/P5_low_zh.mp3"
  },
  {
    "id": "math",
    "word": "math",
    "zh": "math",
    "image": "P5_flashcards_images/P5_math.webp",
    "audioEn": "P5_flashcards_audios/P5_math.mp3",
    "audioZh": "P5_flashcards_audios/P5_math_zh.mp3"
  },
  {
    "id": "meadow",
    "word": "meadow",
    "zh": "meadow",
    "image": "P5_flashcards_images/P5_meadow.webp",
    "audioEn": "P5_flashcards_audios/P5_meadow.mp3",
    "audioZh": "P5_flashcards_audios/P5_meadow_zh.mp3"
  },
  {
    "id": "meat",
    "word": "meat",
    "zh": "meat",
    "image": "P5_flashcards_images/P5_meat.webp",
    "audioEn": "P5_flashcards_audios/P5_meat.mp3",
    "audioZh": "P5_flashcards_audios/P5_meat_zh.mp3"
  },
  {
    "id": "money",
    "word": "money",
    "zh": "money",
    "image": "P5_flashcards_images/P5_money.webp",
    "audioEn": "P5_flashcards_audios/P5_money.mp3",
    "audioZh": "P5_flashcards_audios/P5_money_zh.mp3"
  },
  {
    "id": "moon",
    "word": "moon",
    "zh": "moon",
    "image": "P5_flashcards_images/P5_moon.webp",
    "audioEn": "P5_flashcards_audios/P5_moon.mp3",
    "audioZh": "P5_flashcards_audios/P5_moon_zh.mp3"
  },
  {
    "id": "morning",
    "word": "morning",
    "zh": "morning",
    "image": "P5_flashcards_images/P5_morning.webp",
    "audioEn": "P5_flashcards_audios/P5_morning.mp3",
    "audioZh": "P5_flashcards_audios/P5_morning_zh.mp3"
  },
  {
    "id": "mother",
    "word": "mother",
    "zh": "mother",
    "image": "P5_flashcards_images/P5_mother.webp",
    "audioEn": "P5_flashcards_audios/P5_mother.mp3",
    "audioZh": "P5_flashcards_audios/P5_mother_zh.mp3"
  },
  {
    "id": "mouse",
    "word": "mouse",
    "zh": "mouse",
    "image": "P5_flashcards_images/P5_mouse.webp",
    "audioEn": "P5_flashcards_audios/P5_mouse.mp3",
    "audioZh": "P5_flashcards_audios/P5_mouse_zh.mp3"
  },
  {
    "id": "mouth",
    "word": "mouth",
    "zh": "mouth",
    "image": "P5_flashcards_images/P5_mouth.webp",
    "audioEn": "P5_flashcards_audios/P5_mouth.mp3",
    "audioZh": "P5_flashcards_audios/P5_mouth_zh.mp3"
  },
  {
    "id": "out",
    "word": "out",
    "zh": "out",
    "image": "P5_flashcards_images/P5_out.webp",
    "audioEn": "P5_flashcards_audios/P5_out.mp3",
    "audioZh": "P5_flashcards_audios/P5_out_zh.mp3"
  },
  {
    "id": "owl",
    "word": "owl",
    "zh": "owl",
    "image": "P5_flashcards_images/P5_owl.webp",
    "audioEn": "P5_flashcards_audios/P5_owl.mp3",
    "audioZh": "P5_flashcards_audios/P5_owl_zh.mp3"
  },
  {
    "id": "paint",
    "word": "paint",
    "zh": "paint",
    "image": "P5_flashcards_images/P5_paint.webp",
    "audioEn": "P5_flashcards_audios/P5_paint.mp3",
    "audioZh": "P5_flashcards_audios/P5_paint_zh.mp3"
  },
  {
    "id": "pink",
    "word": "pink",
    "zh": "pink",
    "image": "P5_flashcards_images/P5_pink.webp",
    "audioEn": "P5_flashcards_audios/P5_pink.mp3",
    "audioZh": "P5_flashcards_audios/P5_pink_zh.mp3"
  },
  {
    "id": "restaurant",
    "word": "restaurant",
    "zh": "restaurant",
    "image": "P5_flashcards_images/P5_restaurant.webp",
    "audioEn": "P5_flashcards_audios/P5_restaurant.mp3",
    "audioZh": "P5_flashcards_audios/P5_restaurant_zh.mp3"
  },
  {
    "id": "room",
    "word": "room",
    "zh": "room",
    "image": "P5_flashcards_images/P5_room.webp",
    "audioEn": "P5_flashcards_audios/P5_room.mp3",
    "audioZh": "P5_flashcards_audios/P5_room_zh.mp3"
  },
  {
    "id": "school",
    "word": "school",
    "zh": "school",
    "image": "P5_flashcards_images/P5_school.webp",
    "audioEn": "P5_flashcards_audios/P5_school.mp3",
    "audioZh": "P5_flashcards_audios/P5_school_zh.mp3"
  },
  {
    "id": "seal",
    "word": "seal",
    "zh": "seal",
    "image": "P5_flashcards_images/P5_seal.webp",
    "audioEn": "P5_flashcards_audios/P5_seal.mp3",
    "audioZh": "P5_flashcards_audios/P5_seal_zh.mp3"
  },
  {
    "id": "shout",
    "word": "shout",
    "zh": "shout",
    "image": "P5_flashcards_images/P5_shout.webp",
    "audioEn": "P5_flashcards_audios/P5_shout.mp3",
    "audioZh": "P5_flashcards_audios/P5_shout_zh.mp3"
  },
  {
    "id": "shrimp",
    "word": "shrimp",
    "zh": "shrimp",
    "image": "P5_flashcards_images/P5_shrimp.webp",
    "audioEn": "P5_flashcards_audios/P5_shrimp.mp3",
    "audioZh": "P5_flashcards_audios/P5_shrimp_zh.mp3"
  },
  {
    "id": "sing",
    "word": "sing",
    "zh": "sing",
    "image": "P5_flashcards_images/P5_sing.webp",
    "audioEn": "P5_flashcards_audios/P5_sing.mp3",
    "audioZh": "P5_flashcards_audios/P5_sing_zh.mp3"
  },
  {
    "id": "sky",
    "word": "sky",
    "zh": "sky",
    "image": "P5_flashcards_images/P5_sky.webp",
    "audioEn": "P5_flashcards_audios/P5_sky.mp3",
    "audioZh": "P5_flashcards_audios/P5_sky_zh.mp3"
  },
  {
    "id": "smooth",
    "word": "smooth",
    "zh": "smooth",
    "image": "P5_flashcards_images/P5_smooth.webp",
    "audioEn": "P5_flashcards_audios/P5_smooth.mp3",
    "audioZh": "P5_flashcards_audios/P5_smooth_zh.mp3"
  },
  {
    "id": "snow",
    "word": "snow",
    "zh": "snow",
    "image": "P5_flashcards_images/P5_snow.webp",
    "audioEn": "P5_flashcards_audios/P5_snow.mp3",
    "audioZh": "P5_flashcards_audios/P5_snow_zh.mp3"
  },
  {
    "id": "socks",
    "word": "socks",
    "zh": "socks",
    "image": "P5_flashcards_images/P5_socks.webp",
    "audioEn": "P5_flashcards_audios/P5_socks.mp3",
    "audioZh": "P5_flashcards_audios/P5_socks_zh.mp3"
  },
  {
    "id": "stamp",
    "word": "stamp",
    "zh": "stamp",
    "image": "P5_flashcards_images/P5_stamp.webp",
    "audioEn": "P5_flashcards_audios/P5_stamp.mp3",
    "audioZh": "P5_flashcards_audios/P5_stamp_zh.mp3"
  },
  {
    "id": "star",
    "word": "star",
    "zh": "star",
    "image": "P5_flashcards_images/P5_star.webp",
    "audioEn": "P5_flashcards_audios/P5_star.mp3",
    "audioZh": "P5_flashcards_audios/P5_star_zh.mp3"
  },
  {
    "id": "stew",
    "word": "stew",
    "zh": "stew",
    "image": "P5_flashcards_images/P5_stew.webp",
    "audioEn": "P5_flashcards_audios/P5_stew.mp3",
    "audioZh": "P5_flashcards_audios/P5_stew_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 09）
const PHONICS_GROUPS = {
  "th": [
    "thumb",
    "think",
    "teeth",
    "math",
    "mouth",
    "father",
    "mother",
    "brother",
    "smooth"
  ],
  "st": [
    "store",
    "be still",
    "stew",
    "stop",
    "stick",
    "star",
    "stamp"
  ],
  "ks": [
    "ducks",
    "hooks",
    "socks",
    "books",
    "chicks",
    "clocks"
  ],
  "ng": [
    "hanging",
    "licking",
    "sing",
    "feeding",
    "morning",
    "swing"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "subject": "Father",
    "action": "cook",
    "sentence": "Father can cook hot stew in the kitchen.",
    "question": "What can father cook?",
    "options": [
      "stew",
      "socks",
      "star"
    ],
    "correct": "stew"
  },
  {
    "subject": "Mother",
    "action": "feed",
    "sentence": "Mother is feeding the sweet ducks.",
    "question": "What is mother doing?",
    "options": [
      "feeding",
      "singing",
      "jumping"
    ],
    "correct": "feeding"
  },
  {
    "subject": "Girl",
    "action": "sing",
    "sentence": "She can sing a lovely song in the morning.",
    "question": "What can she do?",
    "options": [
      "sing",
      "stop",
      "stamp"
    ],
    "correct": "sing"
  },
  {
    "subject": "Boy",
    "action": "look",
    "sentence": "Look at the bright star in the sky!",
    "question": "What is in the sky?",
    "options": [
      "star",
      "dish",
      "bed"
    ],
    "correct": "star"
  },
  {
    "subject": "Child",
    "action": "jump",
    "sentence": "He can jump and swing on Friday.",
    "question": "What can he do on Friday?",
    "options": [
      "swing",
      "chew",
      "cook"
    ],
    "correct": "swing"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P5_VOCABULARY;
  window.P5_VOCABULARY = P5_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P5_VOCABULARY,
    P5_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
