import { Link, useLoaderData } from 'react-router-dom'

function Careers() {
  const careers = useLoaderData()
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')
  const data = res.json()
  if (!res.ok) {
    throw Error('Couldn`t fetch this career')
  }
  return data
}

export default Careers
