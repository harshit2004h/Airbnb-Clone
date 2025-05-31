import { PrismaClient, Prisma } from '@prisma/client';
import fs from 'fs/promises';
import path from 'path';

const prisma = new PrismaClient();

async function loadJson<T>(filename: string): Promise<T[]> {
  const filePath = path.join(__dirname, filename);
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data) as T[];
}

async function main() {
  const users = await loadJson<Prisma.UserCreateInput>('seedData/users.json');
  const homes = await loadJson<Prisma.HomeCreateInput>('seedData/homes.json');
  const favorites = await loadJson<Prisma.FavoriteCreateInput>('seedData/favorites.json');
  const reservations = await loadJson<Prisma.ReservationCreateInput>('seedData/reservations.json');

  console.log('Seeding users...');
  for (const user of users) {
    await prisma.user.create({ data: user });
  }

  console.log('Seeding homes...');
  for (const home of homes) {
    await prisma.home.create({ data: home });
  }

  console.log('Seeding favorites...');
  for (const favorite of favorites) {
    await prisma.favorite.create({ data: favorite });
  }

  console.log('Seeding reservations...');
  for (const reservation of reservations) {
    await prisma.reservation.create({ data: reservation });
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
