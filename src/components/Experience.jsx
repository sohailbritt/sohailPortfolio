import React,{useState, useLayoutEffect} from 'react'
import mteducare from '../assets/mteducare.png'
import download from '../assets/download.png'
const Experience = () => {

  const experienceData = [
    {
      companyLogo: download,
      position: 'Frontend Developer',
      year: 'Aug 2021 - Dec 2022',
      contribution: [
        'Development of various UI projects, including Campaigns, Nextgenbha and Feedback interfaces resulting in a 90% increase in user engagement.',
        'Assumed responsibility for UI functionality enhancements post-integration, especially during CI/CD deployment in the lower environment.',
        'Demonstrated proficiency in troubleshooting and rectifying UI/UX design-related issues.',
        'Played a significant role in the campaign team, driving initiatives and bringing high-level contributions.'
      ]
    },
    {
      companyLogo: mteducare,
      position: 'UI Developer',
      year: 'Nov 2018 - Aug 2021',
      contribution: [
        'Utilized rapid prototyping and user testing, boosting feature adoption by 95%',
        'Upheld brand uniformity throughout the design evolution .',
        'Designed, executed, and refined visual features in a timely manner.',
        'Liaised and collaborated seamlessly with Figma design teams testing and deployed frontend features'
      ]
    }]
    const [experience, setExperience] = useState([]);
    useLayoutEffect(()=>{
      setExperience(experienceData)
    },[])

    const fixLogo = {position: 'relative', right: '8px', width: '93px', height: '78px'}
    const logowidth = {width: '100px'}

  return (
    <div>
        <h1 className='text-white mt-24 ml-72 text-3xl'>Work Experience</h1>
        {experience.length === 0 ? '' : experience.map((item) => (<div className=' flex text-white ml-72 mt-24 w-4/6 p-8 ' style={{ border: "1px solid rgb(33 33 33)"}} >
        <div className='mt-4'>
          <img src={item.companyLogo} style={item.companyLogo == mteducare ? fixLogo : logowidth}/>
        </div>
        <div className={item.position == 'UI Developer' ? 'ml-[8px]' : 'ml-8'}>
            <div>
                <h1 className=' mt-12 mb-[20px] text-2xl text-md font-light'>{item.position}<span className='text-sm font-medium text-[#4bffa5]'>     &nbsp; &nbsp;  [ {item.year} ] </span></h1>
            </div>
            {item.contribution.map(list=>
            <ul className='tracking-wide font-light list-disc leading-8'>
              <li>{list}</li>
            </ul>)}
        </div>
        </div>))}
    </div>
  )
}

export default Experience