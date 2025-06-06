Creare un'applicazione con le seguenti feature:

- Pagina homepage con al suo interno un form di ricerca e un tasto submit, al click del bottone vi deve mandare una pagina interna della vostra applicazione (es: localhost:8000/pikachu) con useNavigate:

    const navigate = useNavigate();
    navigate('/targetpath')
    navigate('/path', { replace: true });

- All'interno della pagina specifica del Pokémon bisogna ricavarsi il nome del Pokémon attraverso i params e fare
una fetch con un hook custom chiamato useGetPokemon che utilizzerà a sua volta l'hook useSWR.
