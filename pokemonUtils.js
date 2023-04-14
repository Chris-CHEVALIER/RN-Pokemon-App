export const getStyleType = type => {
  let typeStyle = null

  switch (type) {
    case 'water':
      typeStyle = {
        backgroundColor: '#6890f0',
        backgroundImage: "linear-gradient('#6890f0', '#386ceb')",
        borderColor: '#1753e3'
      }
      break
    case 'fire':
      typeStyle = {
        backgroundColor: '#f08030',
        backgroundImage: "linear-gradient('#f08030', '#dd6610')",
        borderColor: '#b4530d'
      }
      break
    case 'grass':
      typeStyle = {
        backgroundColor: '#78c850',
        backgroundImage: "linear-gradient('#78c850', '#5ca935')",
        borderColor: '#4a892b'
      }
      break
    case 'flying':
      typeStyle = {
        backgroundColor: '#a890f0',
        backgroundImage: "linear-gradient('#a890f0', '#9180c4')",
        borderColor: '#7762b6'
      }
      break
    case 'bug':
      typeStyle = {
        backgroundColor: '#a8b820',
        backgroundImage: "linear-gradient('#a8b820', '#8d9a1b')",
        borderColor: '#616b13'
      }
      break
    case 'ground':
      typeStyle = {
        backgroundColor: '#ad9551',
        backgroundImage: "linear-gradient('#78c850', '#5ca935')",

      }
      break
    case 'rock':
      typeStyle = {
        backgroundColor: '#b8a038',
        backgroundImage: "linear-gradient('#b8a038', '#93802d')",
        borderColor: '#746523'
      }
      break
    case 'steel':
      typeStyle = {
        backgroundColor: '#b8b8d0',
        backgroundImage: "linear-gradient('#b8b8d0', '#9797ba')",
        borderColor: '#7a7aa7'
      }
      break
    case 'normal':
      typeStyle = {
        backgroundColor: '#7a7a57',
        backgroundImage: "linear-gradient('#78c850', '#5ca935')",
      }
      break
    case 'electric':
      typeStyle = {
        backgroundColor: '#f8d030',
        backgroundImage: "linear-gradient('#f8d030', '#f0c108')",
        borderColor: '#c19b07'
      }
      break
    case 'ghost':
      typeStyle = {
        backgroundColor: '#705898',
        backgroundImage: "linear-gradient('#705898', '#554374')",
        borderColor: '#413359'
      }
      break
    case 'dark':
      typeStyle = {
        backgroundColor: '#78c850',
        backgroundImage: "linear-gradient('#78c850', '#5ca935')",
        borderColor: '#4a892b'
      }
      break
    case 'dragon':
      typeStyle = {
        backgroundColor: '#7038f8',
        backgroundImage: "linear-gradient('#7038f8', '#4c08ef')",
        borderColor: '#3d07c0'
      }
      break
    case 'poison':
      typeStyle = {
        backgroundColor: '#a040a0',
        backgroundImage: "linear-gradient('#a040a0', '#803380')",
        borderColor: '#662966'
      }
      break
    case 'psychic':
      typeStyle = {
        backgroundColor: '#f85888',
        backgroundImage: "linear-gradient('#f85888', '#f61c5d')",
        borderColor: '#d60945'
      }
      break
    case 'fairy':
      typeStyle = {
        backgroundColor: '#d044d0',
        backgroundImage: "linear-gradient('#78c850', '#5ca935')",
      }
      break
    case 'fighting':
      typeStyle = {
        backgroundColor: '#c03028',
        backgroundImage: "linear-gradient('#c03028', '#9d2721')",
        borderColor: '#82211b'
      }
      break
    case 'ice':
      typeStyle = {
        backgroundColor: '#98d8d8',
        backgroundImage: "linear-gradient('#98d8d8', '#69c6c6')",
        borderColor: '#45b6b6'
      }
      break
    default:
      break
  }
  return typeStyle
}
