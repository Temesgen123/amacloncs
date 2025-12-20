import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <h2 className="text-2xl font-bold">This is a test heading for Amacloncs application</h2>
        <p className="text-lg text-gray-500">This is a test paragraph with a button</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Click me</button>
       </div>
      </main>
    </div>
  );
}
