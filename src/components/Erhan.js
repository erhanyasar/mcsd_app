import "../css/Erhan.css";

function Erhan() {
  let merhaba = "Merhaba ";
  let isim = "";

  return (
    <>
      <h1 style={{ backgroundColor: "lightblue" }}>Bu bir başlık</h1>
      <input placeholder="Adınızı giriniz..."></input>
      <p>{merhaba + isim}</p>
    </>
  );
}

export default Erhan;
