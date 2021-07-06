import Card from './components/Card'
import Form from './components/Form'

const name = 'John Doe'
const isSignedIn = true

const users = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quam mollitia eligendi blanditiis expedita rerum quaerat enim porro consequuntur ut! Dolores nam error nobis quo rerum sit vitae totam corrupti?'
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    bio: 'Reprehenderit a ipsam ipsa ad iusto sed perferendis, placeat corporis, consectetur autem iure earum optio labore quis voluptas quam possimus, assumenda dolor impedit! Nam eos magnam nemo doloremque reiciendis atque?'
  },
  {
    name: 'Jack Doe',
    email: 'jackdoe@gmail.com',
    bio: 'Ab atque molestiae mollitia? Quidem autem rerum veritatis possimus distinctio cumque atque? Laudantium assumenda culpa blanditiis omnis, ullam, nobis dignissimos maxime explicabo possimus eos facilis saepe vel, asperiores fugiat! Alias?'
  }
]

const App = () => {
  return (
    <>
      {
        users.map((user, i) => (
          <Card
            key={i}
            user={user}
            name={user.name}
            email={user.email}
            bio={user.bio}
          />
          // <div key={i}>
          //   <p>Name: {user.name}</p>
          //   <p>Email: {user.email}</p>
          // </div>
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
