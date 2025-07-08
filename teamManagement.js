function choosePokemon(name) {
    let team = JSON.parse(localStorage.getItem('team')) || [];

    if (team.length >= 3) {
        alert('Du hast schon 3 Pokemon du gieriger Hund');
        window.location.href = 'Opp.html';
        return;
    }
    if (!team.includes(name)) {
      team.push(name);
      localStorage.setItem('team', JSON.stringify(team));
      alert(name + ' wurde deinem Team hinzugefügt!');
    } else {
      alert(name + ' ist schon im Team!');
    }
}