import React from 'react'
import { Link } from 'react-router-dom';

export default function Fish({fish}) {
  return (
    <div>
      <Link to={`/Fishes/${fish._id}`}>
        <h2>{fish["Species Name"]}</h2>
      </Link>
    </div>
  )
}