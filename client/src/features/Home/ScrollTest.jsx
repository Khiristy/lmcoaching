function Bouton() {
  // Fonction qui applique la transformation à l'élément avec l'id "global"
  const handleClick = () => {
    const globalElement = document.getElementById('global');
    if (globalElement) {
      globalElement.style.transform = 'translateY(-100vh)';
      globalElement.style.transition = 'transform 0.5s ease';
    }
  };

  return (
    <div>
      {/* Bouton qui appelle la fonction handleClick au clic */}
      <button onClick={handleClick}>
        Cliquez-moi
      </button>
    </div>
  );
}

export default Bouton;