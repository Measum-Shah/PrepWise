import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { getRandomInterviewCover } from '@/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedBack = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
  const formattedDate = dayjs(feedBack?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        {/* Badge Type */}
        <div className="absolute top-0 right-0 w-fit px-4 bg-light-600">
          <p className="badge-text">{normalizedType}</p>
        </div>

        {/* Cover Image */}
        <Image
          src={getRandomInterviewCover()}
          alt="cover image"
          height={90}
          width={90}
          className="rounded-full object-fit size-[90]"
        />

        {/* Interview Role */}
        <h3 className="mt-5 capitalize">{role} interview</h3>

        {/* Date & Score */}
        <div className="flex flex-row gap-5 mt-3">
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" alt="calendar" width={22} height={22} />
            <p>{formattedDate}</p>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedBack?.totalScore || '---'}/100</p>
            </div>
          </div>
        </div>

        {/* Assessment Text */}
        <p className="line-clamp-2 mt-2">
          {feedBack?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills"}
        </p>

        {/* Tech Icons & Button */}
        <div className="flex flex-row justify-between">
      <DisplayTechIcons techStack={techstack} />
          <Button className="btn-primary">
            <Link href={feedBack ? `/interview${interviewId}/feedback` : `/interview/${interviewId}`}>
              {feedBack ? 'Check Feedback' : 'View'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
