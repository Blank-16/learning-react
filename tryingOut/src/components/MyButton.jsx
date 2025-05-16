
export default function MyButton({ label = "black", onClick }) {

  return (
    <>
      <button className="outline-none px-4 py-1 cursor-pointer rounded-xl text-white shadow-lg font-extrabold" style={{ backgroundColor: label }} onClick={onClick}>{label}</button>
    </>
  );
}