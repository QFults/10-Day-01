import Card from './components/Card'
import Form from './components/Form'

const name = 'John Doe'
const isSignedIn = true

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com'
  },
  {
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com'
  }
]

const App = () => {
  return (
    <>
      {
        users.map((user, i) => (
          <div key={i}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))
      }
      {
        [<button>1</button>, <button>2</button>, <button>3</button>]
      }
      {
        (() => <span>some text</span>)()
      }
      <h1>You are {isSignedIn ? '' : 'not'} signed in</h1>
      <h1>Hello {name}</h1>
      <button>Click Me {6 * 7}</button>
      <Card />
      <Form />
    </>
  )
}

export default App
