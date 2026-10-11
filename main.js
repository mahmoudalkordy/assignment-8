
var meal1 = {
    Name: "Shrimp Scampi",
    img: "imgs/shrimp.avif",
    description: "Garlicky shrimp in white wine butter sauce",
    ingredients: ["400g large shrimp, peeled", "300g linguine pasta", "6 cloves garlic, minced",
        "1/2 cup white wine", "4 tablespoons butter", "2 tablespoons olive oil", "Fresh parsley, chopped",
        "Lemon juice and zest", "Red pepper flakes"
    ],
    level: "Easy",
    category: "Seafood",
    instructions: ["Cook linguine according to package directions. Reserve 1 cup pasta water.",
        "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
        "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
        "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
        "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
        "Garnish with parsley, lemon zest, and serve immediately."],

    calories: 520,
    protein: 36,
    carbohydrates: 54,
    fat: 18,
    fiber: 3,
    sodium: 620,
    tips: ["Don't overcook shrimp - they cook very quickly", "Use good quality white wine for best flavor",
        "Toss pasta in sauce for maximum flavor absorption", "Add extra lemon for bright, fresh taste"],
    rate: 4.8,
    reviews: 356,
    prepTime: 10,
    cookTime: 15,
    servings: 2
};

var meal2 = {
    Name: "Caprese Sandwich",
    img: "imgs/caprese.avif",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    ingredients: ["1 ciabatta bread", "200g fresh mozzarella, sliced", "2 large tomatoes, sliced",
        "Fresh basil leaves", "3 tablespoons pesto", "2 tablespoons balsamic glaze", "Olive oil",
        "Salt and pepper"
    ],
    level: "Easy",
    category: "Italian",
    instructions: ["Slice ciabatta bread in half horizontally.",
        "Toast bread lightly until just crispy.",
        "Spread pesto on both sides of bread.",
        "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
        "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
        "Close sandwich, cut in half, and serve immediately."],

    calories: 480,
    protein: 22,
    carbohydrates: 48,
    fat: 22,
    fiber: 3,
    sodium: 680,
    tips: ["Use ripe, in-season tomatoes for best flavor", "Buffalo mozzarella is traditional but harder to slice",
        "Toast bread lightly - not too crispy", "Add prosciutto or salami for a heartier sandwich"],
    rate: 4.5,
    reviews: 189,
    prepTime: 10,
    cookTime: 5,
    servings: 2
};

var meal3 = {
    Name: "Lasagna Bolognese",
    img: "imgs/bolgnese.avif",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    ingredients: ["12 lasagna sheets", "500g ground beef", "400g canned tomatoes", "1 onion, diced",
        "2 carrots, diced", "500ml béchamel sauce", "200g mozzarella, grated", "100g parmesan cheese",
        "Fresh basil"
    ],
    level: "Intermediate",
    category: "Italian",
    instructions: ["Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets according to package directions. Drain and set aside.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, layer meat sauce, lasagna sheets, and béchamel sauce. Repeat 3-4 times.",
        "Top final layer with béchamel, mozzarella, and parmesan cheese.",
        "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving."],
    calories: 680,
    protein: 42,
    carbohydrates: 58,
    fat: 28,
    fiber: 6,
    sodium: 920,
    tips: ["Make bolognese sauce a day ahead for better flavor", "Don't skip the resting time after baking",
        "Use fresh pasta sheets for best texture", "Freeze leftovers in individual portions"],
    rate: 4.9,
    reviews: 478,
    prepTime: 30,
    cookTime: 90,
    servings: 4
};

var meal4 = {
    Name: "BBQ Pulled Pork",
    img: "imgs/bbq.avif",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    ingredients: ["1kg pork shoulder", "1 cup BBQ sauce", "1/2 cup apple cider vinegar",
        "2 tablespoons brown sugar", "1 tablespoon paprika", "1 tablespoon garlic powder",
        "Burger buns", "Coleslaw for serving"
    ],
    level: "Easy",
    category: "American",
    instructions: ["Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
        "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
        "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
        "Remove pork and shred with two forks. Discard excess fat.",
        "Return shredded pork to slow cooker, mix with BBQ sauce.",
        "Serve on toasted buns with coleslaw on top."],
    calories: 620,
    protein: 48,
    carbohydrates: 52,
    fat: 22,
    fiber: 3,
    sodium: 1180,
    tips: ["Use pork shoulder for best results - it stays moist", "Let pork rest before shredding for juicier meat",
        "Make your own BBQ sauce for better flavor", "Leftovers freeze well for up to 3 months"],
    rate: 4.7,
    reviews: 412,
    prepTime: 15,
    cookTime: 240,
    servings: 4
};

var meal5 = {
    Name: "Greek Moussaka",
    img: "imgs/greek.avif",
    description: "Traditional layered eggplant casserole with lamb",
    ingredients: ["3 large eggplants, sliced", "500g ground lamb", "400g canned tomatoes", "1 onion, diced",
        "3 cloves garlic, minced", "500ml béchamel sauce", "100g parmesan cheese", "Cinnamon and oregano",
        "Olive oil"
    ],
    level: "Intermediate",
    category: "Mediterranean",
    instructions: ["Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
        "Brush eggplant slices with olive oil, grill or bake until softened.",
        "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
        "Preheat oven to 180°C (350°F).",
        "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
        "Bake for 45 minutes until golden. Let rest 15 minutes before serving."],
    calories: 580,
    protein: 36,
    carbohydrates: 32,
    fat: 32,
    fiber: 8,
    sodium: 820,
    tips: ["Salt eggplant to remove bitterness", "Don't skip the resting time - it helps set the layers",
        "Use ground beef if lamb is unavailable", "Make ahead and reheat for easier serving"],
    rate: 4.8,
    reviews: 234,
    prepTime: 30,
    cookTime: 60,
    servings: 4
};

var meal6 = {
    Name: "Honey Garlic Salmon",
    img: "imgs/honey.avif",
    description: "Pan-seared salmon with a sweet and savory glaze",
    ingredients: ["2 salmon fillets (6oz each)", "3 tablespoons honey", "2 tablespoons soy sauce",
        "4 cloves garlic, minced", "1 tablespoon olive oil", "1 teaspoon fresh ginger, grated",
        "Sesame seeds for garnish", "Green onions, sliced"
    ],
    level: "Easy",
    category: "Seafood",
    instructions: ["Pat salmon fillets dry with paper towels. Season with salt and pepper.",
        "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
        "Heat olive oil in a large skillet over medium-high heat.",
        "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
        "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
        "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."],
    calories: 380,
    protein: 35,
    carbohydrates: 28,
    fat: 14,
    fiber: 0,
    sodium: 720,
    tips: ["Don't overcook salmon - it should be slightly pink in the center", "Use wild-caught salmon for best flavor and nutrition",
        "Let the sauce caramelize slightly for deeper flavor", "Pair with steamed broccoli or asparagus for a complete meal"],
    rate: 4.9,
    reviews: 187,
    prepTime: 10,
    cookTime: 15,
    servings: 2
};

var meal7 = {
    Name: "Margherita Pizza",
    img: "imgs/pizza.avif",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    ingredients: ["300g pizza dough", "200g crushed tomatoes", "250g fresh mozzarella",
        "Fresh basil leaves", "2 tablespoons olive oil", "2 cloves garlic, minced",
        "Salt and pepper to taste", "Parmesan cheese for topping"
    ],
    level: "Intermediate",
    category: "Italian",
    instructions: ["Let pizza dough come to room temperature and rest for 1 hour.",
        "Preheat oven to maximum temperature (usually 250°C/480°F).",
        "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
        "Roll out dough on a floured surface to desired thickness.",
        "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
        "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan."],
    calories: 580,
    protein: 24,
    carbohydrates: 68,
    fat: 22,
    fiber: 4,
    sodium: 920,
    tips: ["Use a pizza stone for crispier crust", "Don't overload with toppings - less is more",
        "Add basil after baking to keep it fresh", "Let dough rest properly for best texture"],
    rate: 4.9,
    reviews: 512,
    prepTime: 90,
    cookTime: 12,
    servings: 2
};

var meal8 = {
    Name: "Teriyaki Chicken Bowl",
    img: "imgs/bowl.avif",
    description: "Sweet and savory chicken over rice with vegetables",
    ingredients: ["400g chicken thighs, sliced", "1/2 cup teriyaki sauce", "2 cups cooked rice",
        "1 broccoli head, florets", "1 carrot, julienned", "Sesame seeds", "Green onions, sliced",
        "1 tablespoon sesame oil"
    ],
    level: "Easy",
    category: "Asian",
    instructions: ["Heat sesame oil in a pan. Cook chicken until browned on all sides.",
        "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
        "Meanwhile, steam broccoli and carrots until tender-crisp.",
        "Divide rice between bowls.",
        "Top with teriyaki chicken and steamed vegetables.",
        "Garnish with sesame seeds and green onions. Serve hot."],
    calories: 540,
    protein: 42,
    carbohydrates: 58,
    fat: 14,
    fiber: 4,
    sodium: 1240,
    tips: ["Use chicken thighs for juicier meat", "Make homemade teriyaki sauce for better flavor control",
        "Add edamame for extra protein", "Meal prep by cooking rice and chicken ahead"],
    rate: 4.7,
    reviews: 367,
    prepTime: 15,
    cookTime: 20,
    servings: 2
};

var meal9 = {
    Name: "Caesar Salad",
    img: "imgs/salad.avif",
    description: "Classic salad with crispy romaine and creamy dressing",
    ingredients: ["1 large romaine lettuce", "1/2 cup Caesar dressing", "1/2 cup parmesan cheese, shaved",
        "1 cup croutons", "2 anchovy fillets (optional)", "Lemon wedges", "Black pepper"
    ],
    level: "Easy",
    category: "Mediterranean",
    instructions: ["Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
        "Place lettuce in a large salad bowl.",
        "Add Caesar dressing and toss until evenly coated.",
        "Add croutons and half the parmesan cheese. Toss gently.",
        "Top with remaining parmesan shavings and anchovies if using.",
        "Serve immediately with lemon wedges and fresh black pepper."],
    calories: 320,
    protein: 12,
    carbohydrates: 18,
    fat: 22,
    fiber: 3,
    sodium: 680,
    tips: ["Use cold, crisp lettuce for best texture", "Make homemade croutons for better flavor",
        "Add grilled chicken for a complete meal", "Don't dress salad until ready to serve"],
    rate: 4.4,
    reviews: 198,
    prepTime: 15,
    cookTime: 0,
    servings: 2
};

var meal10 = {
    Name: "Creamy Spaghetti Carbonara",
    img: "imgs/creamy.avif",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    ingredients: ["400g spaghetti pasta", "200g pancetta or guanciale, diced", "4 large eggs",
        "100g Pecorino Romano cheese, grated", "50g Parmesan cheese, grated", "Freshly ground black pepper",
        "Salt for pasta water"
    ],
    level: "Easy",
    category: "Italian",
    instructions: ["Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
        "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
        "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
        "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
        "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"],
    calories: 520,
    protein: 28,
    carbohydrates: 62,
    fat: 18,
    fiber: 3,
    sodium: 680,
    tips: ["Use room temperature eggs for a smoother sauce consistency", "Work quickly when mixing eggs with hot pasta to avoid scrambling",
        "Reserve extra pasta water - it's the secret to perfect creaminess", "Freshly grated cheese makes all the difference in flavor",
        "Never add cream - authentic carbonara is made with eggs only"],
    rate: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4
};

var meal11 = {
    Name: "Classic Beef Burger",
    img: "imgs/burger.avif",
    description: "Juicy homemade burger with all the fixings",
    ingredients: ["500g ground beef (80/20)", "4 burger buns", "4 slices cheddar cheese",
        "Lettuce leaves", "Tomato slices", "Red onion, sliced", "Pickles", "Burger sauce or condiments"
    ],
    level: "Easy",
    category: "American",
    instructions: ["Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
        "Season patties generously with salt and pepper on both sides.",
        "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
        "Add cheese slices in the last minute of cooking and cover to melt.",
        "Toast burger buns lightly on the grill or in a pan.",
        "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce."],
    calories: 650,
    protein: 38,
    carbohydrates: 42,
    fat: 35,
    fiber: 2,
    sodium: 920,
    tips: ["Don't press down on burgers while cooking - keeps them juicy", "Make indent in center to prevent burger from puffing up",
        "Let patties rest for 2-3 minutes before serving", "Toast buns for better texture and flavor"],
    rate: 4.6,
    reviews: 421,
    prepTime: 15,
    cookTime: 20,
    servings: 4
};

var meal12 = {
    Name: "Chicken Stir-Fry",
    img: "imgs/stir.avif",
    description: "Quick and healthy stir-fry with colorful vegetables",
    ingredients: ["500g chicken breast, sliced", "2 bell peppers, sliced", "1 broccoli head, florets",
        "2 carrots, julienned", "3 tablespoons soy sauce", "2 tablespoons oyster sauce",
        "1 tablespoon sesame oil", "2 cloves garlic, minced", "Fresh ginger, grated"
    ],
    level: "Easy",
    category: "Asian",
    instructions: ["Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
        "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
        "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
        "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
        "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
        "Serve immediately over steamed rice or noodles."],
    calories: 320,
    protein: 34,
    carbohydrates: 18,
    fat: 12,
    fiber: 5,
    sodium: 840,
    tips: ["Cut all ingredients before starting to cook", "Keep heat high for authentic stir-fry texture",
        "Don't overcrowd the wok or vegetables will steam", "Add cashews or peanuts for extra crunch"],
    rate: 4.5,
    reviews: 324,
    prepTime: 15,
    cookTime: 15,
    servings: 4
};

var meal13 = {
    Name: "Mediterranean Quinoa Bowl",
    img: "imgs/quinoa.avif",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    ingredients: ["1 cup quinoa", "Cherry tomatoes, halved", "Cucumber, diced", "Red onion, sliced",
        "Kalamata olives", "Feta cheese, crumbled", "Fresh parsley", "Tahini dressing"
    ],
    level: "Easy",
    category: "Mediterranean",
    instructions: ["Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        "While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
        "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."],
    calories: 480,
    protein: 18,
    carbohydrates: 58,
    fat: 20,
    fiber: 10,
    sodium: 540,
    tips: ["Rinse quinoa well to remove bitter coating", "Let quinoa cool before adding fresh ingredients",
        "Make extra tahini dressing - it keeps well in the fridge", "Add grilled chicken or chickpeas for extra protein"],
    rate: 4.5,
    reviews: 156,
    prepTime: 20,
    cookTime: 35,
    servings: 2
};

var meal14 = {
    Name: "Thai Green Curry",
    img: "imgs/thai.avif",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    ingredients: ["2 tablespoons green curry paste", "400ml coconut milk", "300g chicken breast, sliced",
        "1 red bell pepper, sliced", "100g green beans", "1 eggplant, cubed",
        "2 tablespoons fish sauce", "1 tablespoon palm sugar", "Fresh Thai basil leaves"
    ],
    level: "Intermediate",
    category: "Asian",
    instructions: ["Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
        "Add half the coconut milk and stir to combine with the curry paste.",
        "Add sliced chicken and cook until no longer pink, about 5 minutes.",
        "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
        "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
        "Stir in fresh Thai basil leaves. Serve hot with jasmine rice."],
    calories: 420,
    protein: 26,
    carbohydrates: 22,
    fat: 26,
    fiber: 5,
    sodium: 890,
    tips: ["Adjust spice level by using more or less curry paste", "Add vegetables in stages based on cooking time needed",
        "Fresh Thai basil is essential for authentic flavor", "Use full-fat coconut milk for richest, creamiest sauce"],
    rate: 4.7,
    reviews: 312,
    prepTime: 15,
    cookTime: 25,
    servings: 4
};

var meal15 = {
    Name: "French Onion Soup",
    img: "imgs/soup.avif",
    description: "Rich beef broth with caramelized onions and melted cheese",
    ingredients: ["4 large onions, thinly sliced", "4 tablespoons butter", "1 liter beef broth",
        "1/2 cup white wine", "2 bay leaves", "Fresh thyme", "Baguette slices",
        "200g Gruyère cheese, grated"
    ],
    level: "Intermediate",
    category: "Mediterranean",
    instructions: ["Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
        "Add white wine and deglaze the pot, scraping up brown bits.",
        "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
        "Meanwhile, toast baguette slices until golden.",
        "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
        "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."],
    calories: 380,
    protein: 18,
    carbohydrates: 36,
    fat: 18,
    fiber: 4,
    sodium: 980,
    tips: ["Patience is key - don't rush the onion caramelization", "Use good quality beef broth for best flavor",
        "Gruyère can be substituted with Swiss cheese", "Watch carefully when broiling to avoid burning"],
    rate: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 60,
    servings: 4
};

var meal16 = {
    Name: "Vegetable Curry",
    img: "imgs/curry.avif",
    description: "Hearty vegetarian curry with coconut milk",
    ingredients: ["2 potatoes, cubed", "1 cauliflower, florets", "2 carrots, sliced",
        "1 can chickpeas", "400ml coconut milk", "3 tablespoons curry powder",
        "1 onion, diced", "3 cloves garlic, minced", "Fresh spinach"
    ],
    level: "Easy",
    category: "Asian",
    instructions: ["Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted.",
        "Serve hot over basmati rice or with naan bread."],
    calories: 380,
    protein: 14,
    carbohydrates: 48,
    fat: 16,
    fiber: 12,
    sodium: 480,
    tips: ["Add vegetables in order of cooking time needed", "Adjust curry powder amount to taste",
        "Use full-fat coconut milk for creamier curry", "Add protein like tofu or paneer if desired"],
    rate: 4.6,
    reviews: 289,
    prepTime: 20,
    cookTime: 30,
    servings: 4
};

var meal17 = {
    Name: "Pad Thai",
    img: "imgs/pad.avif",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    ingredients: ["200g rice noodles", "200g shrimp, peeled", "2 eggs",
        "3 tablespoons tamarind paste", "2 tablespoons fish sauce", "1 tablespoon palm sugar",
        "Bean sprouts", "Crushed peanuts", "Lime wedges and cilantro"
    ],
    level: "Intermediate",
    category: "Asian",
    instructions: ["Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Heat wok over high heat. Scramble eggs and set aside.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",
        "Serve topped with crushed peanuts, lime wedges, and cilantro."],
    calories: 540,
    protein: 32,
    carbohydrates: 62,
    fat: 16,
    fiber: 4,
    sodium: 1120,
    tips: ["Don't oversoak noodles or they'll be mushy", "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors", "Prepare all ingredients before starting to cook"],
    rate: 4.8,
    reviews: 445,
    prepTime: 20,
    cookTime: 15,
    servings: 2
};

var meals = [meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8, meal9, meal10, meal11, meal12, meal13, meal14, meal15, meal16, meal17];

displayRandomly();

function displayRandomly() {

    var r = Math.floor(Math.random() * meals.length);

    var ingredientList = "";
    for (var i = 0; i < meals[r].ingredients.length; i++) {
        ingredientList += `<div class="listitem d-flex align-items-center">
                                <span class="num rounded-circle d-flex justify-content-center align-items-center">${i + 1}</span>
                                <p>${meals[r].ingredients[i]}</p>
                        </div>`
    }

    var instructionsList = "";
    for (var i = 0; i < meals[r].instructions.length; i++) {
        instructionsList += `<div class="instruction d-flex align-items-start">
                                <span class="num d-flex justify-content-center align-items-center">${i + 1}</span>
                                <p>${meals[r].instructions[i]}</p>
                            </div>`
    }

    var tipsList = "";
    for (var i = 0; i < meals[r].tips.length; i++) {
        tipsList += ` <div class="tip d-flex justify-content-start align-items-center">
                                <div class="tiplogo d-flex justify-content-center align-items-center rounded-circle">
                                    <i class="fa-solid fa-check"></i>
                                </div>
                                <p>${meals[r].tips[i]}</p>
                    </div>`
    }

    var extended = "";

    if (meals[r].prepTime + meals[r].cookTime > 45) {
        extended = `<div class="d-block">
        <div class="extended d-flex justify-content-start align-items-center ">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
                <h4>Extended Preparation Time</h4>
                <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
        </div>
    </div>`;
    }
    else {
        extended = `<div class="d-none">
        <div class="extended d-flex justify-content-center align-items-center ">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <div>
                <h4>Extended Preparation Time</h4>
                <p>This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
        </div>
    </div>`;
    }


    var meal =
        `<div class="meal d-flex">
            <div class="photo position-relative">
                <img src="${meals[r].img}" alt="">

                <div class="details position-absolute d-flex justify-content-center align-items-center">
                    <div>
                        <i class="fa-solid fa-clock"></i>
                        <p>Prep Time</p>
                        <h2>${meals[r].prepTime} min</h2>
                    </div>
                    <div>
                        <i class="fa-solid fa-fire-burner"></i>
                        <p>Cook Time</p>
                        <h2>${meals[r].cookTime} min</h2>
                    </div>
                    <div>
                        <i class="fa-solid fa-users"></i>
                        <p>Servings</p>
                        <h2>${meals[r].servings} people</h2>
                    </div>
                </div>
                <div class="reviews d-flex justify-content-center align-items-baseline position-absolute rounded-pill">
                    <i class="fa-solid fa-star"></i>
                    <p>${meals[r].rate}</p>
                    <span>${meals[r].reviews} reviews</span>
                </div>
            </div>

            <div class="lower">
                <div class="mid d-flex">
                    <div class="sidebtns ">
                        <button>
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-share-nodes"></i>
                        </button>
                    </div>
                    <div class="type">
                        <div class="d-flex justify-content-start align-items-center">
                            <span class="green rounded-pill">${meals[r].level}</span>
                            <span class="blue rounded-pill">${meals[r].category}</span>
                        </div>
                        <h3>${meals[r].Name}</h3>
                        <p>${meals[r].description}</p>
                    </div>
     
                </div>

                ${extended}

                <ul class="nav nav-tabs d-flex" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active d-flex align-items-center" id="ingredients-tab"
                            data-bs-toggle="tab" data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                            aria-controls="ingredients-tab-pane" aria-selected="true">

                            <i class="fa-solid fa-list-check"></i>
                            Ingredients
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex align-items-center" id="instructions-tab" data-bs-toggle="tab"
                            data-bs-target="#instructions-tab-pane" type="button" role="tab"
                            aria-controls="instructions-tab-pane" aria-selected="false">

                            <i class="fa-solid fa-book-open"></i>
                            Instructions</button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex align-items-center" id="nutrition-tab" data-bs-toggle="tab"
                            data-bs-target="#nutrition-tab-pane" type="button" role="tab"
                            aria-controls="nutrition-tab-pane" aria-selected="false">

                            <i class="fa-solid fa-chart-pie"></i>
                            Nutrition
                        </button>
                    </li>

                    <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex align-items-center" id="tips-tab" data-bs-toggle="tab"
                            data-bs-target="#tips-tab-pane" type="button" role="tab" aria-controls="tips-tab-pane"
                            aria-selected="false">
                            <i class="fa-solid fa-lightbulb"></i>
                            Cheif's Tips
                        </button>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="ingredients-tab-pane" role="tabpanel"
                        aria-labelledby="ingredients-tab" tabindex="0">

                        <div class="ingredients">
                           ${ingredientList}
                        </div>
                    </div>

                    <div class="tab-pane fade" id="instructions-tab-pane" role="tabpanel"
                        aria-labelledby="instructions-tab" tabindex="0">
                        <div class="instructions">
                            ${instructionsList}
                        </div>
                    </div>

                    <div class="tab-pane fade" id="nutrition-tab-pane" role="tabpanel" aria-labelledby="nutrition-tab"
                        tabindex="0">
                        <div class="nutrition">
                            <div class="macros d-flex justify-content-between align-items-center">

                                <div class="d-flex justify-content-start align-items-center">

                                    <div class="logomacros calories d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-fire"></i>
                                    </div>
                                    <span>Calories</span>
                                </div>
                                <h3>${meals[r].calories} kcal</h3>
                            </div>
                            <div class="macros d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="logomacros protein  d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-dumbbell"></i>
                                    </div>
                                    <span>Protein</span>
                                </div>
                                <h3>${meals[r].protein}g</h3>
                            </div>
                            <div class="macros d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div
                                        class="logomacros carbohydrates  d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-wheat-awn"></i>
                                    </div>
                                    <span>Carbohydrates</span>
                                </div>
                                <h3>${meals[r].carbohydrates}g</h3>
                            </div>

                            <div class="macros d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="logomacros fat d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-droplet"></i>
                                    </div>
                                    <span>Fat</span>
                                </div>
                                <h3>${meals[r].fat}g</h3>
                            </div>
                            <div class="macros d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="logomacros fiber  d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-leaf"></i>
                                    </div>
                                    <span>Fiber</span>
                                </div>
                                <h3>${meals[r].fiber}g</h3>
                            </div>
                            <div class="macros d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-start align-items-center">
                                    <div class="logomacros sodium  d-flex justify-content-center align-items-center">
                                        <i class="fa-solid fa-cube"></i>
                                    </div>
                                    <span>Sodium</span>
                                </div>
                                <h3>${meals[r].sodium} mg</h3>
                            </div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tips-tab-pane" role="tabpanel" aria-labelledby="tips-tab"
                        tabindex="0">
                        <div class="tips ">
                            ${tipsList}
                        </div>
                    </div>
                </div>

                <button class="trybtn" onclick="displayRandomly()">
                <i class="fa-solid fa-arrows-rotate"></i>
                Try Another Recipe
                </button>
            </div>
    </div>`;

    document.getElementById("meals").innerHTML = meal;
}