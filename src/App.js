import './App.css'

const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <button>Click Me</button>
      <div className='card text-white bg-primary mb-3 myCard'>
        <div className='card-header'>Header</div>
        <div className='card-body'>
          <h5 className='card-title'>Primary card title</h5>
          <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <form>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
          <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
          <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <div className='mb-3 form-check'>
          <input type='checkbox' className='form-check-input' id='exampleCheck1' />
          <label className='form-check-label' htmlFor='exampleCheck1'>Check me out</label>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </>
  )
}

export default App
