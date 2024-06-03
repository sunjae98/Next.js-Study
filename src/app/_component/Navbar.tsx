import Nav from "./Nav";

export default function Navbar() {
  return (
    <div className="flex ">
      <Nav name="제품" />
      <Nav name="솔루션" />
      <Nav name="리소스" />
      <Nav name="엘리스 AI" />
    </div>
  );
}
