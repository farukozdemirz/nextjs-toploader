"use client"

import React from 'react'
import { useTopLoader } from 'nextjs-toploader';

const Component = () => {
  const loader = useTopLoader();
  return (
    <div>
      <button onClick={() => loader.start()}>Start</button>
      <button onClick={() => loader.setProgress(0.5)}>Set Progress</button>
    </div>
  )
}

export default Component