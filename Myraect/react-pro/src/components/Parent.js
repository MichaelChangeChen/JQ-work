import Child from './Child'

function Parent() {
  return (
    <>
      <Child text="Hello" name="Eddy" />
      <Child text={123} name={true} />
      <Child />
    </>
  )
}

export default Parent
