import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()
  return (
    <div className="career-details">
      <h2>Career detail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Locaton: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum quidem blanditiis accusantium minima
        ipsam rerum deserunt tempore modi quasi excepturi cupiditate placeat, dolorum laboriosam voluptate fugit
        distinctio sit omnis?
      </div>
    </div>
  )
}
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params
  const res = await fetch(`http://localhost:4000/careers/${id}`)
  return res.json()
}
