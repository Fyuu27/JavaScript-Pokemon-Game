function choosePokemon(name) {
    let opponent = JSON.parse(localStorage.getItem('opponent')) || [];

   
    if (!opponent.includes(name)) {
      team.push(name);
      localStorage.setItem('opponent', JSON.stringify(opponent));
      alert(name + ' wurde deinem Team hinzugefügt!');
    } else {
      alert(name + ' ist schon im Team!');
    }
}