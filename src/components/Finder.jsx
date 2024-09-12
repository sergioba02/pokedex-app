function Finder({
  finderLabel = "Buscador",
  buttonText = "Buscar",
  setBusqueda,
  setIniciarBusqueda
}) {


  const onClickButton = () => {
    setIniciarBusqueda(true)
  }
  return (
    <>
      <div className="finder">
        <label className="label" htmlFor="">{finderLabel}</label>
        <input className="text-box" type="text" placeholder="pokemon" onChange={(e) => setBusqueda(e.target.value)} />
        <input className="button" type="button" value={buttonText} onClick={(e) => setIniciarBusqueda(true)} />
      </div>
    </>
  );
}

export default Finder;
