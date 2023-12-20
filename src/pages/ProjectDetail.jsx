import React from 'react'
import { data } from '../assets/data'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as AppSlice from '../redux/slices/app'

export default function ProjectDetail() {
  const { project_name } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  React.useEffect(() => {
    //
  }, [])

  return (
    <div id='Detail'>
      <Navbar />
      <div className='container mx-auto max-sm:px-1 pt-10 px-10'>
        <p className='text-center font-bold text-4xl'>Project Detail</p>
        <div className='flex my-10 flex-wrap'>
          {
            data.filter(project => String(project.name).toLowerCase().replaceAll(' ', '-') === project_name).map((project, index) => {
              return (
                !project?.image_hero ? null :
                  <div key={index} className=' max-lg:hidden flex max-lg:w-full w-1/2 p-10 max-lg:order-first'>
                    <img className=' object-scale-down object-top' src={project?.image_hero} alt={project?.name} />
                  </div>
              )
            })

          }
          <div className='flex flex-col max-lg:w-full w-1/2 p-10 gap-2 mx-auto'>
            {
              data.filter(project => String(project.name).toLowerCase().replaceAll(' ', '-') === project_name).map((project, index) => {
                return (
                  !project ? null :
                    <div key={index}>
                      <p className='text-xl'>Project Name : <span className='font-bold'>{project?.name}</span></p>
                      <p className=' '>Repository : <a href={project?.repo} className='text-sky-600 break-all' target='_blank' rel="noreferrer">{project?.repo}</a></p>
                      {
                        !project?.link ? null :
                          <p className='  '>Deploy Link : <a href={project?.link} className='text-sky-600 break-all' target='_blank' rel="noreferrer">{project?.link}</a></p>
                      }
                      {
                        !project?.collection ? null :
                          <p className=' '>Api Collection : <a href={project?.collection} className='text-sky-600 break-all' target='_blank' rel="noreferrer">{project?.collection}</a></p>
                      }
                      {
                        !project?.apk ? null :
                          <p>Apk  : <a href={project?.apk} className='text-sky-600 break-all' target='_blank' rel="noreferrer">{project?.apk}</a></p>
                      }
                      <div className='flex flex-wrap gap-2  items-center'>
                        <p >Project Stack :</p>
                        {
                          project?.stack.map((stack, index) => <p key={index} className='p-2 border-2 border-gray'>{stack} </p>)
                        }
                      </div>
                      <p>{project?.description}</p>

                      <div className=' max-lg:flex hidden max-lg:w-full w-1/2 pt-10 max-lg:order-first'>
                        <img className=' object-scale-down object-top mx-auto' src={project?.image_hero} alt={project?.name} />
                      </div>
                    </div>
                )
              })
            }

            <div className='mt-10'>
              <p className='font-bold text-xl mb-5'>Other Project</p>
              <div className='mx-auto flex flex-wrap gap-2 justify-center'>
                {
                  data.map((project, index) => {
                    const hide = String(project?.name).toLowerCase().replaceAll(' ', '-') === project_name
                    if (!hide) {
                      return (
                        <div key={index} onClick={() => {
                          window.scrollTo(0, 0)
                          dispatch(AppSlice.setProject(project))
                          navigate(`/detail/${String(project.name).toLowerCase().replaceAll(' ', '-')}`)
                        }}
                          className='border-gray shadow-sm hover:bg-black 
                          flex flex-col p-4 border-2 border-gray hover:text-white hover:cursor-pointer w-full'>
                          <div className='flex w-full gap-4'>
                            <img src={project.image} alt={project.name} style={{ height: 64, objectFit: 'scale-down', objectPosition: 'center' }} />
                            <p className=' font-bold text-xl p-2'>{project.name}</p>
                          </div>

                        </div>
                      )
                    } else {
                      return null
                    }
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
