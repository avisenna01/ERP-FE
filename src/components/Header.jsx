// import logo from '../assets/image-1.svg';

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-2 pb-2 pd:pb-16 px-10 bg-blue-200">
      {/* <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-xl font-semibold tracking-widest text-center uppercase md:text-4xl text-amber-800 font-title">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p> */}
      <span>HOME</span>
      <div className="flex justify-around items-center">
        <span className="mx-2 font-bold">ABOUT</span>
        <span className="mx-2 font-bold">PRICING</span>
        <span className="mx-2 font-bold">CONTACT</span>
        <button className="mx-2 text-xs font-bold text-cyan-400 border-solid border-2 border-sky-500 rounded p-2">LOGIN</button>
      </div>
    </header>
  );
}