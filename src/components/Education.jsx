import React, {useState, useLayoutEffect} from 'react'

const Education = () => {
  const [education, setEducation] = useState([]);
  useLayoutEffect(()=>{
    setEducation([
      {
        degreeName: 'B. Tech',
        courseName: 'Bachelors Degree in Computer Science.',
        year: '2014 - 2018',
        collegeName: 'Vaageswari College of Engineering, Karimnagar'
      },
      {degreeName: '12th Standard',
      courseName: 'Central Board of Secondary Education, Delhi',
      year: '2011 - 2012',
      collegeName: 'Manipur Public School, Koirengei'
      },
      {degreeName: '10th Standard',
      courseName: 'Central Board of Secondary Education, Delhi',
      year: '2010 - 2011',
      collegeName: 'Manipur Public School, Koirengei'
      }])
  },[])
  return (
    <div>
        <h1 className='text-white mt-24 ml-72 text-3xl'>Education</h1>
        {education.length === 0 ? '' : education.map((item) =>
        <div className='text-white ml-72 mt-24 w-4/6 p-8 ' style={{ border: "1px solid rgb(33 33 33)"}} >
         {console.log(education)}
          <div className='ml-8 '>
          <h1 className='mt-8 mb-3 text-xl font-light'>{item.degreeName} <span className='text-sm text-[#4bffa5] font-normal'> &nbsp; &nbsp; [ {item.year} ]</span></h1>
          <p className='mt-8 mb-3 text-md font-light'>{item.courseName}</p>
          <p className='mt-3 mb-3 text-md font-light'>{item.collegeName}</p>
      </div>
        </div>)}
    </div>
  )
}

export default Education