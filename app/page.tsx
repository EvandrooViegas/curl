import Features from "./sections/features";

export default function Home() {
  return (
    <main className="space-y-40 text-white">
      <div className="flex flex-col gap-12 bg-[#161616] items-center px-24 pt-40  ">
      <h1 className="text-4xl font-bold ">
      Get Fit with a Professional Trainer
      </h1>
      <p className="text-gray-300">
      Achieve your fitness goals with personalized workout plans
      </p>
      <div className='flex gap-12'>
            <button className='bg-primary px-4 py-2'>Start Training Now</button>
            <button className="font-bold">Learn More {"->"}</button>
        </div>
      </div>
        <Features />
    </main>
  )
}
