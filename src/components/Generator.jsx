import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { WORKOUTS,SCHEMES } from '../utils/swoldier';
import Button from './Button';

function Header (props){
    const{index,title,description}=props
    return(
<div className='flex flex-col gap-4 items-center'>

<div className='flex items-center justify-center gap-2'>
    <p className='text-3xl sm:text-4xl md:text-5xl font-semibold
    text-slate-400'>{index}</p>
    <h4 className='text-xl sm:text-2xl md:text:3xl '>{title}</h4>

</div>
    <p className='text-sm  sm:text-base mx-auto'>{description}</p>

</div>
    )
}


export default function Generator(props) {
    const {choice,setChoice,goal,setGoal,muscles,setMuscles, updateWorkout}=props


    const [showModal,setShowModal]=useState(false)
   
    function toggleModal(){
        setShowModal(!showModal)
    }

    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val=>val !== muscleGroup))
        }


        if(muscles.length>2){

            return
        }
        if(choice !=='individual'){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles,muscleGroup])

        if(muscles.length ===2){
            setShowModal(false)
        }

    }

    
  return (

      <SectionWrapper id={'generate'} header={"generate your workout"} title=
      {['It\'s','Huge','o\'clock']}>
        <Header index={'01'} title={'Pick your choice'} 
        description ={'Select your workout.'}/>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
           
      {Object.keys(WORKOUTS).map((type,typeIndex)=>{
          return( 
              <button onClick={()=>{
                setMuscles([])
                setChoice(type)

              }} className={`bg-black border px-4
                py-3 rounded-lg duration-200 hover:border-blue-400 
                ${type === choice ? 'border-blue-600' : 'border-blue-200'}`}
                 key={typeIndex}>
        <p className='capitalize'>{type.replaceAll('_',"")}</p>
        </button>
      )})}
        
      </div>

      <Header index={'02'} title={'Lock your choice'} 
        description ={'Select muscles to workout.'}/>

        <div className=' bg-slate-950 flex flex-col  border border-solid 
        border-blue-600 rounded-lg'>
            <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>

            <p className='capitalize'>{muscles.length== 0 ?'Select Muscle Groups':muscles.join(' ')}</p>
            <i className="fa-solid absolute right-3 top-1/2 
            -translate-y-1/2 fa-caret-down"></i>
            </button>
        {showModal && (
            <div className='flex flex-col pb-3 px-3 '>
                {
                 (choice==='individual' ? WORKOUTS[choice]:
                    Object.keys(WORKOUTS[choice])).
                    map((muscleGroup,muscleGroupIndex) => {
                        return(
                        <button onClick={()=>{
                            updateMuscles(muscleGroup)

                        }}key = {muscleGroupIndex} className={`hover:bg-blue-800 flex duration-200 flex-col bg-slate-400 items-center justify-center border
                           border-white 
                            ${muscles.includes(muscleGroup) ? 'bg-blue-600' : 'border-blue-200'}`} >
                           <p className='uppercase flex flex-col '>{muscleGroup}</p>
                        </button>
                      )  })
                }
                  
            </div>

        )}

      </div>

      <Header index={'03'} title={'Become Huge'} 
        description ={'Select your ultimate goal.'}/>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
           
      {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
          return( 
            <button onClick={()=>{
                setGoal(scheme)

              }} className={`bg-black border px-4 
                py-3 rounded-lg duration-200 hover:border-blue-400 
                ${scheme === goal? 'border-blue-600' : 'border-blue-200'}`}
                 key={schemeIndex}>
        <p className='capitalize'>{scheme.replaceAll('_',"")}</p>
        </button>
      )})}
        
      </div>
      <section className='flex flex-col items-center'>

      <Button func={updateWorkout} text={"Formulate"} ></Button>

      </section>
    </SectionWrapper>

  )
}
