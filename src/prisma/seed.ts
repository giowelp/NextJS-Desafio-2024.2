import { PrismaClient } from '@prisma/client';
import { title } from 'process';

const prisma = new PrismaClient();

async function main() {
  const mangas = [
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol1.png",
      volume: 1,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol2.png",
      volume: 2,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol3.png",
      volume: 3,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol4.png",
      volume: 4,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol5.png",
      volume: 5,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol6.png",
      volume: 6,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol7.png",
      volume: 7,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol8.png",
      volume: 8,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol9.png",
      volume: 9,
    },
    
    {
      title: 'VAGABOND',
      description: 'samurai',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/vagabondvol10.png",
      volume: 10,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol1.png",
      volume: 1,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol2.png",
      volume: 2,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol3.png",
      volume: 3,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol4.png",
      volume: 4,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol5.png",
      volume: 5,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol6.png",
      volume: 6,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol7.png",
      volume: 7,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol8.png",
      volume: 8,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol9.png",
      volume: 9,
    },

    {
      title: 'BERSERK',
      description: 'medieval',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/berserkvol10.png",
      volume: 10,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol1.png",
      volume: 1,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol2.png",
      volume: 2,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol3.png",
      volume: 3,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol4.png",
      volume: 4,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol5.png",
      volume: 5,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol6.png",
      volume: 6,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol7.png",
      volume: 7,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol8.png",
      volume: 8,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol9.png",
      volume: 9,
    },

    {
      title: 'THE CLIMBER',
      description: 'mountain',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/theclimbervol10.png",
      volume: 10,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol1.png",
      volume: 1,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol2.png",
      volume: 2,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol3.png",
      volume: 3,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol4.png",
      volume: 4,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol5.png",
      volume: 5,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol6.png",
      volume: 6,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol7.png",
      volume: 7,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol8.png",
      volume: 8,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol9.png",
      volume: 9,
    },

    {
      title: 'BLACK CLOVER',
      description: 'magic',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/blackclovervol10.png",
      volume: 10,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol1.png",
      volume: 1,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol2.png",
      volume: 2,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol3.png",
      volume: 3,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol4.png",
      volume: 4,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol5.png",
      volume: 5,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol6.png",
      volume: 6,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol7.png",
      volume: 7,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol8.png",
      volume: 8,
    },

    {
      title: 'MONSTER',
      description: 'mystery',
      price: 37.99,
      createdAt: new Date(),
      image: "/images/monstervol9.png",
      volume: 9,
    },

    
  ];

  for (const manga of mangas) {
    await prisma.manga.create({
      data: manga,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
