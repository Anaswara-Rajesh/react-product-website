import React from 'react';
import './App.css';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
      <ProductDetail
        name="Whiskas® Dry Adult Dewasa 7+, "
        subName="Cat food Rasa Mackerel"
        image="/assets/product1.svg"
        status='HOTSALE'
        relatedImages={[{ id: 1, url: '/assets/activeProduct1.svg' }, { id: 2, url: '/assets/inactiveProduct2.svg' }, { id: 3, url: '/assets/inactiveProduct2.svg' }]}
        descriptionItems={[
          { id: 1, title: "Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting." },
          { id: 2, title: "Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat." },
          { id: 3, title: "Mengandung serat untuk memperlancar pencernaan dan meningkatkan kesehatan usus." },
          { id: 4, title: "Diperkaya dengan kalsium, fosfor dan vitamin D untuk tulang yang sehat." },
          { id: 5, title: "In hac habitasse platea dictumst. In orci enim, blandit at ornare non,  ullamcorper eget elit. Donec tempor lorem a aliquam ullamcorper. Donec  nulla orci, porta et ligula at, laoreet ornare velit. Nam sollicitudin  risus et sem sagittis bibendum. Curabitur quam quam, scelerisque vitae  augue id, tincidunt feugiat massa." },
        ]}
        availableOfferItems={[
          { id: 1, title: "Our offer 10% off on first 5 purchases, upto ₹100. On orders ₹999 and above." },
          { id: 2, title: "Bank offer 10% off on axis bank credit/debit cards, upto ₹100. On orders ₹999 and above." },
          { id: 3, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada libero a egestas congue. Pellentesque pretium tortor in eros maximus feugiat. Maecenas vestibulum consequat sodales. Integer vel elementum quamfelis ferme." },
          { id: 4, title: "Pellentesque pretium tortor in eros maximus feugiat. Maecenas vestibulum consequat sodales. Integer vel elementum quamfelis ferme." },
          { id: 5, title: "In hac habitasse platea dictumst. In orci enim, blandit at ornare non, ullamcorper eget elit. Donec tempor lorem a aliquam ullamcorper. Donec nulla orci, porta et ligula at, laoreet ornare velit. " },
        ]}
        sizes={["1.5 kg", "1 kg", "500 gr", "250 gr"]}
        ingredients={[{ id: 1, title: "Nutrisi" }, { id: 2, title: "Vitamin E" }, { id: 3, title: "Protein" }]}
        shipping={[{ id: 1, title: " For all orders exceeding a value of 100USD shipping is offered for free." }, { id: 2, title: "Returns will be accepted for up to 10 days of Customer’s receipt or  tracking number on unworn items. You, as a Customer, are obliged to  inform us via email before you return the item. " }, { id: 3, title: " Otherwise, standard shipping charges apply. Check out our delivery Terms & Conditions for more details." }]}
        waranty='If no further information is needed, you’ll receive an approval  confirmation email, followed by a shipping confirmation email with a  tracking number for your replacement headphones once they have been  shipped. Please do not discard your faulty headphones until you receive  your replacement.'
        supportFirstParagraph='Need any help? Send us a message using the form below and we will get back to you as fast as we can,'
        supportSecondParagraph="Donec vestibulum ullamcorper suscipit. Sed a bibendum purus, vel  vulputate velit. Proin et faucibus nibh, at cursus neque. Duis egestas  ex ac sem efficitur, vitae malesuada dui dictum. Donec bibendum dui sed  elit ultricies, at eleifend urna imperdiet. Morbi egestas congue eros,  nec pulvinar nisl semper hendrerit."
        relatedProducts={[{ id: 1, url: '/assets/related.svg' }, { id: 2, url: '/assets/related.svg' }, { id: 3, url: '/assets/related.svg' }]}

      />
  );
}

export default App;
