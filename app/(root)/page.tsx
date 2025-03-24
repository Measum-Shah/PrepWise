import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';
const page = () => {
  return (
   <>
   <section className='card-cta'>
    <div className='flex flex-col gap-6 max-w-lg' >
      <h2>SkillTestHub – Practice job interviews with AI-powered simulations.</h2>
      <p className='text-lg'>
        This platform enables users to practice job interviews, receive instant feedback, and refine their responses to enhance interview performance, boost confidence and get their dream job.
      </p>
      <Button asChild className='btn-primary max-sm:w-full'>
        <Link href="/interview">
        Start an Interview</Link>
      </Button>
    </div>
    <Image src="/robot.png"  alt='robo-dude' width={400} height={400} className='max-sm:hidden'/>
   </section>

   <section className='flex flex-col gap-6 mt-8'>
    <h2>Your Interviews</h2>

    <div className="interviews-section">
      {dummyInterviews.map((interview)=>(
        <InterviewCard {...interview} key={interview.id}/>
      ))}
    </div>
   </section>

   <section className='flex flex-col gap-6 mt-8'>
    <h2>Take an Interview</h2>
    <div
    className='interviews-section'>
       {dummyInterviews.map((interview)=>(
        <InterviewCard {...interview} key={interview.id}/>
      ))}
      <p>There are no interviews available</p>
    </div>
   </section>
   </>
  )
}

export default page
