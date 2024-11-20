import React, { useEffect, useState } from 'react'
import { getMockData } from '../ProjectMokData';
import ToggleComponent from './ToggleComponent';

export default function ToggleList() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getMockData().then((response) => setProjectData(response));
  }, [])

  return (
    <div>
      {projectData.map((item) => (
        <div>
          <div>
            <img src={item.image}/>
          </div>
          <div>
            <h4>{item.image}</h4>
            <p>{item.date}</p>
          </div>
          <p>{item.summary}</p>
          <ToggleComponent id={item.id}/>
        </div>
      ))}
    </div>
  )
}
