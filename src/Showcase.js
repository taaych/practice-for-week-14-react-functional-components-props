import bulbasaur from './images/bulbasaur.jpg';
import spriggy from './images/Spriggy.png'
import './Showcase.css';

const Showcase = () => {
  const favPokemon = 'Sprigitto';

  const pokeCharacteristics = {
    type: 'Grass',
    move: 'Leafage'
  };

  return (
    <div className='showcase-wrapper'>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ height: 500, width: 500, padding: 20, borderRadius: '50%' }}
        src={spriggy}
        alt='Sprigitto'
      />
      <h2>
        {favPokemon}'s type is{' '}
        <span className='poke-type'>{pokeCharacteristics.type}</span> and one of
        their moves is{' '}
        <span className='poke-move'>{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
};

export default Showcase;
