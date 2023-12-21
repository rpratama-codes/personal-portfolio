import React from 'react'
import { data } from '../assets/data'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as AppSlice from '../redux/slices/app'
import * as Icons from 'react-feather'

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
          <div className='flex flex-col max-lg:w-full w-3/5 p-10 gap-5 mx-auto'>
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

                      <div className='flex flex-wrap my-5 gap-5'>
                        <Link to={project.repo} target='_blank'>
                          <div className='flex bg-black text-white border-black border-2 hover:bg-white hover:text-black p-4 rounded-lg gap-5'>
                            <Icons.GitHub />
                            <p className=' font-bold'>View Repository on Github</p>
                          </div>
                        </Link>

                        {
                          !project?.link ? null :
                            <Link to={project.link} target='_blank'>
                              <div className='flex bg-black text-white border-black border-2 hover:bg-white hover:text-black p-4 rounded-lg gap-5'>
                                <Icons.Link />
                                <p className=' font-bold'>Visit Web</p>
                              </div>
                            </Link>
                        }

                        {
                          !project?.collection ? null :
                            <Link to={project.collection} target='_blank'>
                              <div className='flex bg-black text-white border-black border-2 hover:bg-white hover:text-black p-4 rounded-lg gap-5'>
                                <Icons.DownloadCloud />
                                <p className=' font-bold'>Get Api Collection</p>
                              </div>
                            </Link>
                        }
                        {
                          !project?.apk ? null :
                            <Link to={project.apk} target='_blank'>
                              <div className='flex bg-black text-white border-black border-2 hover:bg-white hover:text-black p-4 rounded-lg gap-5'>
                                <Icons.Grid />
                                <p className=' font-bold'>Download APK</p>
                              </div>
                            </Link>
                        }
                      </div>

                      {
                        !project?.image_hero ? null :
                          <div className='flex max-lg:w-full w-full pt-10 max-lg:order-first'>
                            <img className=' object-scale-down object-top mx-auto' src={project?.image_hero} alt={project?.name} />
                          </div>
                      }


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
                          flex flex-col p-4 border-2 border-black hover:text-white hover:cursor-pointer w-full'>
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
