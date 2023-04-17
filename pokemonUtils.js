export const getStyleType = type => {
  let typeStyle = null

  switch (type) {
    case 'water':
      typeStyle = {
        backgroundColor: '#6890f0',
        /* backgroundImage: "linear-gradient('#6890f0', '#386ceb')", */
        borderColor: '#1753e3'
      }
      break
    case 'fire':
      typeStyle = {
        backgroundColor: '#f08030',
        /* backgroundImage: "linear-gradient('#f08030', '#dd6610')", */
        borderColor: '#b4530d'
      }
      break
    case 'grass':
      typeStyle = {
        backgroundColor: '#78c850',
        /* backgroundImage: "linear-gradient('#78c850', '#5ca935')", */
        borderColor: '#4a892b'
      }
      break
    case 'flying':
      typeStyle = {
        backgroundColor: '#a890f0',
        /* backgroundImage: "linear-gradient('#a890f0', '#9180c4')", */
        borderColor: '#7762b6'
      }
      break
    case 'bug':
      typeStyle = {
        backgroundColor: '#a8b820',
        /* backgroundImage: "linear-gradient('#a8b820', '#8d9a1b')", */
        borderColor: '#616b13'
      }
      break
    case 'ground':
      typeStyle = {
        backgroundColor: '#927D44',
        /* backgroundImage: "linear-gradient('#E0C068', '#5ca935')", */
        borderColor: '#927D44'
      }
      break
    case 'rock':
      typeStyle = {
        backgroundColor: '#b8a038',
        /*  backgroundImage: "linear-gradient('#b8a038', '#93802d')", */
        borderColor: '#746523'
      }
      break
    case 'steel':
      typeStyle = {
        backgroundColor: '#b8b8d0',
        /* backgroundImage: "linear-gradient('#b8b8d0', '#9797ba')", */
        borderColor: '#7a7aa7'
      }
      break
    case 'normal':
      typeStyle = {
        backgroundColor: '#7a7a57'
        /* backgroundImage: "linear-gradient('#78c850', '#5ca935')", */
      }
      break
    case 'electric':
      typeStyle = {
        backgroundColor: '#f8d030',
        /* backgroundImage: "linear-gradient('#f8d030', '#f0c108')", */
        borderColor: '#c19b07'
      }
      break
    case 'ghost':
      typeStyle = {
        backgroundColor: '#705898',
        /* backgroundImage: "linear-gradient('#705898', '#554374')", */
        borderColor: '#413359'
      }
      break
    case 'dark':
      typeStyle = {
        backgroundColor: '#705848',
        /* backgroundImage: "linear-gradient('#705848', '#49392F')", */
        borderColor: '#49392F'
      }
      break
    case 'dragon':
      typeStyle = {
        backgroundColor: '#7038f8',
        /*  backgroundImage: "linear-gradient('#7038f8', '#4c08ef')", */
        borderColor: '#3d07c0'
      }
      break
    case 'poison':
      typeStyle = {
        backgroundColor: '#a040a0',
        /*  backgroundImage: "linear-gradient('#a040a0', '#803380')", */
        borderColor: '#662966'
      }
      break
    case 'psychic':
      typeStyle = {
        backgroundColor: '#f85888',
        /* backgroundImage: "linear-gradient('#f85888', '#f61c5d')", */
        borderColor: '#d60945'
      }
      break
    case 'fairy':
      typeStyle = {
        backgroundColor: '#9B6470',
        /* backgroundImage: "linear-gradient('#78c850', '#9B6470')", */
        borderColor: '#9B6470'
      }
      break
    case 'fighting':
      typeStyle = {
        backgroundColor: '#c03028',
        /* backgroundImage: "linear-gradient('#c03028', '#9d2721')", */
        borderColor: '#82211b'
      }
      break
    case 'ice':
      typeStyle = {
        backgroundColor: '#98d8d8',
        /* backgroundImage: "linear-gradient('#98d8d8', '#69c6c6')", */
        borderColor: '#45b6b6'
      }
      break
    default:
      break
  }
  return typeStyle
}

export const typeImages = {
  bug: require('./assets/types-bg/bug-bg.png'),
  electric: require('./assets/types-bg/electric-bg.png'),
  fairy: require('./assets/types-bg/fairy-bg.png'),
  fighting: require('./assets/types-bg/fighting-bg.png'),
  fire: require('./assets/types-bg/fire-bg.png'),
  flying: require('./assets/types-bg/flying-bg.png'),
  ghost: require('./assets/types-bg/ghost-bg.png'),
  grass: require('./assets/types-bg/grass-bg.png'),
  ground: require('./assets/types-bg/ground-bg.png'),
  ice: require('./assets/types-bg/ice-bg.png'),
  rock: require('./assets/types-bg/rock-bg.png'),
  water: require('./assets/types-bg/water-bg.png'),

  psychic: require('./assets/types-bg/fairy-bg.png'),
  poison: require('./assets/types-bg/fairy-bg.png'),
  dragon: require('./assets/types-bg/fire-bg.png'),
  dark: require('./assets/types-bg/ghost-bg.png'),
  steel: require('./assets/types-bg/rock-bg.png'),
  normal: require('./assets/types-bg/fighting-bg.png')
}
