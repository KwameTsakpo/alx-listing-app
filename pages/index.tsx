import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE } from '../constants';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to ALX Listing App</h1>

        <div className="flex justify-center mb-6">
          <Button label="Get Started" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Modern Apartment"
            description="2-bedroom apartment with ocean view."
            imageUrl={PLACEHOLDER_IMAGE}
            price="$120/night"
          />
          <Card
            title="Cozy Cabin"
            description="A peaceful cabin retreat in the woods."
            imageUrl={PLACEHOLDER_IMAGE}
            price="$90/night"
          />
          <Card
            title="Urban Studio"
            description="Minimalist studio in the heart of the city."
            imageUrl={PLACEHOLDER_IMAGE}
            price="$110/night"
          />
        </div>
      </main>
    </>
  );
}
