import "../css/Erhan.css";

function Erhan() {
  let merhaba = "Merhaba ";
  let isim = "Erhan ";

  const satırIslemleri = () => {
    return (
      <>
        <strong>erhan</strong>
      </>
    );
  };

  return (
    <>
      <h1 className="erhan" style={{ color: "lightblue" }}>
        {merhaba + isim}
      </h1>
      <input placeholder="Adınızı giriniz..."></input>
      <p>{satırIslemleri()}</p>
    </>
  );
}

export default Erhan;
