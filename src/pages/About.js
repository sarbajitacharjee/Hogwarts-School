
import React from 'react';

const About = () => (
  <div className="about-page p-8 bg-gradient-to-r from-red-200 to-blue-100 h-[100vh]">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <section className="history mb-8">
      <h2 className="text-2xl font-semibold mb-2">Our History</h2>
      <p className="text-gray-700 text-md leading-relaxed">
        Founded over a thousand years ago, Hogwarts School of Witchcraft and Wizardry is one of the most prestigious magical institutions in the wizarding world. Established by the four greatest wizards and witches of the age—Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin—the school has a rich history filled with magical education and legendary events. Each founder contributed unique values and skills to the school, creating the four houses that bear their names and shaping the diverse and inclusive environment that Hogwarts is known for today.
      </p>
    </section>
    <section className="vision-mission">
      <h2 className="text-2xl font-semibold mb-2">Vision and Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        At Hogwarts, our vision is to cultivate young witches and wizards into capable, ethical, and compassionate leaders of the magical community. We strive to inspire curiosity, foster a sense of adventure, and promote a deep understanding of magical arts and sciences. Our mission is to provide a safe, inclusive, and stimulating environment where students can develop their magical abilities, explore their interests, and grow into well-rounded individuals. We emphasize the importance of courage, loyalty, wisdom, and ambition, reflecting the core values of our founders.
      </p>
    </section>
    <section className="infrastructure mt-8">
      <h2 className="text-2xl font-semibold mb-2">Infrastructure and Facilities</h2>
      <p className="text-gray-700 leading-relaxed">
        Hogwarts boasts an impressive array of facilities designed to support magical education and personal growth. The school is housed in a sprawling castle with numerous towers, secret passages, and enchanted rooms. Our state-of-the-art classrooms are equipped for teaching a wide range of subjects, from Potions to Transfiguration. The Great Hall serves as the heart of the school, hosting meals and important events. Our extensive library, overseen by Madam Pince, contains countless magical texts and is a hub for student research. Additionally, Hogwarts offers top-tier Quidditch facilities, greenhouses for Herbology, and a variety of magical creatures in our Care of Magical Creatures classes. The Forbidden Forest and Black Lake provide unique opportunities for hands-on learning and exploration.
      </p>
    </section>
  </div>
);

export default About;
