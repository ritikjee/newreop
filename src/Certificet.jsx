import React, { useState } from 'react'
import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
function Certificet() {
  const ref = useRef(null)
  const [name, setName] = useState("Ritik Jha")
  const [course, setCourse] = useState("Java")
  const [date, setDate] = useState("12/12/2021")
  const [url, setUrl] = useState()


  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.href = dataUrl
        link.click()
        setUrl(dataUrl)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  console.log(url)
  return (
    <>
      <div ref={ref} className=' w-[800px] h-[500px] relative'>
        <img src="./public/TDC.png" alt="certificet" className=' w-[800px] relative h-[500px]' />
        <div className=' absolute text-3xl font-bold  top-40 left-[310px] text-yellow-400'>
          {name}

        </div>
        <div className=' absolute top-52 flex flex-col items-center left-[245px]'>
          <span>For successfully completing the {course}</span>
          <span> course on {date}.</span>
        </div>
      </div>
      <button onClick={onButtonClick}>Download</button>
    </>
  )
}

export default Certificet