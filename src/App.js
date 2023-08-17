import UserProfile from './components/UserProfile/index'
import './App.css'

/*
In modern JavaScript and TypeScript, when you're importing a module from a file, 
you don't necessarily need to provide the exact extension of the file (like .js or .jsx). 
The JavaScript module system automatically assumes certain file extensions by default when 
you omit them. This is why your import statement works without explicitly 
including the .js extension.
*/

const userDetailsList = [
  {
    uniqueNo: 1,
    name: 'crystopher',
    role: 'Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  },
  {
    uniqueNo: 2,
    name: 'marvis',
    role: 'Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
  },
  {
    uniqueNo: 3,
    name: 'jarvis',
    role: 'Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
  },
  {
    uniqueNo: 4,
    name: 'james',
    role: 'Software Developer',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
  },
]

/*
The issue is that you're using the variable name key for destructuring, 
which is causing a problem because key is a reserved prop in React and 
has a specific purpose. When you use .map() to render a list of components, 
React automatically assigns keys to each element in the list for efficient 
rendering and updating. The key is not passed as a prop to your component; 
it's used internally by React.
*/
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachObject => (
        <UserProfile userDetails={eachObject} key={eachObject.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
