
import { ExperienceList } from '../helpers/ExperienceList.jsx' 

function ExperienceItem(){
  
  const employmentInfo = ExperienceList.map(experience => { 

    const valToCompany = () => {

      return Object.entries(experience.addedValue).map(([key, value])=>{
        return <div key={key} className='value-to-company'>{value}</div>
      })
    }

    return(  
      <div className='parent-container'>
        <div key={experience.key} className='company-container'>
          <div className='employment-company'>{experience.employmentInfo}</div>
          <div className='value-company'>{valToCompany()}</div>
        </div>
      </div>
              

    )
  })
    
  return <div>{employmentInfo}</div>
  
}
export default ExperienceItem