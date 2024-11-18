const productList: any = [
  {
    id: 1,
    name: "Whiskas® Dry Adult Dewasa 7+",
    subName: "Cat food Rasa Mackerel",
    image: "/assets/product1.svg",
    status: "HOTSALE",
    relatedImages: [
      { id: 1, url: "/assets/activeProduct1.svg" },
      { id: 2, url: "/assets/inactiveProduct2.svg" },
      { id: 3, url: "/assets/inactiveProduct2.svg" },
    ],
    descriptionItems: [
      { id: 1, title: "Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting." },
      { id: 2, title: "Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat." },
      { id: 3, title: "Mengandung serat untuk memperlancar pencernaan dan meningkatkan kesehatan usus." },
      { id: 4, title: "Diperkaya dengan kalsium, fosfor dan vitamin D untuk tulang yang sehat." },
      { id: 5, title: "In hac habitasse platea dictumst. In orci enim, blandit at ornare non, ullamcorper eget elit." },
    ],
    availableOfferItems: [
      { id: 1, title: "Our offer 10% off on first 5 purchases, upto ₹100. On orders ₹999 and above." },
      { id: 2, title: "Bank offer 10% off on axis bank credit/debit cards, upto ₹100. On orders ₹999 and above." },
      { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 4, title: "Pellentesque pretium tortor in eros maximus feugiat." },
      { id: 5, title: "In hac habitasse platea dictumst. In orci enim, blandit at ornare non, ullamcorper eget elit." },
    ],
    sizes: ["1.5 kg", "1 kg", "500 gr", "250 gr"],
    ingredients: [
      { id: 1, title: "Nutrisi" },
      { id: 2, title: "Vitamin E" },
      { id: 3, title: "Protein" },
    ],
    shipping: [
      { id: 1, title: "For all orders exceeding a value of 100USD shipping is offered for free." },
      { id: 2, title: "Returns will be accepted for up to 10 days of Customer’s receipt or tracking number on unworn items." },
      { id: 3, title: "Otherwise, standard shipping charges apply. Check out our delivery Terms & Conditions for more details." },
    ],
    warranty: "If no further information is needed, you’ll receive an approval confirmation email, followed by a shipping confirmation email.",
    supportFirstParagraph: "Need any help? Send us a message using the form below and we will get back to you as fast as we can.",
    supportSecondParagraph: "Donec vestibulum ullamcorper suscipit. Sed a bibendum purus, vel vulputate velit.",
    relatedProducts: [
      { id: 1, url: "/assets/related.svg" },
      { id: 2, url: "/assets/related.svg" },
      { id: 3, url: "/assets/related.svg" },
    ],
  },
  {
    id: 2,
    name: "Royal Canin Indoor 27",
    subName: "Cat Food for Indoor Cats",
    image: "/assets/dog8.png",
    status: "NEW",
    relatedImages: [
      { id: 1, url: "/assets/dog8.png" },
      { id: 2, url: "/assets/dog8.png" },
      { id: 3, url: "/assets/dog8.png" },
    ],
    descriptionItems: [
      { id: 1, title: "Specially formulated for indoor cats." },
      { id: 2, title: "Helps reduce stool odor with highly digestible proteins." },
      { id: 3, title: "Supports urinary health with balanced minerals." },
      { id: 4, title: "Enriched with Omega-3 for a shiny coat." },
      { id: 5, title: "Reduces hairballs with a blend of fibers and prebiotics." },
    ],
    availableOfferItems: [
      { id: 1, title: "Get 15% off on first 3 purchases, upto ₹150. On orders ₹999 and above." },
      { id: 2, title: "Axis bank offer: Flat 10% off on all purchases above ₹500." },
      { id: 3, title: "Buy one, get one 20% off. Limited time only." },
    ],
    sizes: ["2 kg", "1.5 kg", "1 kg", "500 gr"],
    ingredients: [
      { id: 1, title: "Fiber Blend" },
      { id: 2, title: "Omega-3" },
      { id: 3, title: "Minerals" },
    ],
    shipping: [
      { id: 1, title: "Free shipping for orders above ₹500." },
      { id: 2, title: "Standard shipping charges apply for orders below ₹500." },
    ],
    warranty: "One-year satisfaction guarantee on all purchases.",
    supportFirstParagraph: "Need help? Contact us via email or phone.",
    supportSecondParagraph: "Our customer care team is available 24/7 for any assistance.",
    relatedProducts: [
      { id: 1, url: "/assets/dog8.png" },
      { id: 2, url: "/assets/dog8.png" },
      { id: 3, url: "/assets/dog8.png" },
    ],
  },
  {
    id: 3,
    name: "Purina® Pro Plan Adult",
    subName: "Salmon & Rice Formula",
    image: "/assets/dog4.png",
    status: "DISCOUNTED",
    relatedImages: [
      { id: 1, url: "/assets/dog4.png" },
      { id: 2, url: "/assets/dog4.png" },
      { id: 3, url: "/assets/dog4.png" },
    ],
    descriptionItems: [
      { id: 1, title: "High-protein formula with real salmon." },
      { id: 2, title: "Supports healthy immune function with antioxidants." },
      { id: 3, title: "Promotes healthy skin and a shiny coat." },
      { id: 4, title: "Includes prebiotics to enhance digestive health." },
      { id: 5, title: "Crafted with no artificial colors, flavors, or preservatives." },
    ],
    availableOfferItems: [
      { id: 1, title: "20% off on all purchases during festive season." },
      { id: 2, title: "Free samples included with every order above ₹800." },
      { id: 3, title: "Special discount for returning customers. Contact us for more details." },
    ],
    sizes: ["3 kg", "2 kg", "1 kg"],
    ingredients: [
      { id: 1, title: "Salmon" },
      { id: 2, title: "Rice" },
      { id: 3, title: "Probiotics" },
    ],
    shipping: [
      { id: 1, title: "Enjoy free shipping for orders exceeding ₹1,000." },
      { id: 2, title: "Easy return policy within 7 days of delivery." },
    ],
    warranty: "100% satisfaction guarantee for 30 days after purchase.",
    supportFirstParagraph: "Feel free to reach out to our team for product inquiries.",
    supportSecondParagraph: "We are dedicated to ensuring your satisfaction with every purchase.",
    relatedProducts: [
      { id: 1, url: "/assets/dog3.png" },
      { id: 2, url: "/assets/dog3.png" },
      { id: 3, url: "/assets/dog3.png" },
    ],
  },
];


export default productList;