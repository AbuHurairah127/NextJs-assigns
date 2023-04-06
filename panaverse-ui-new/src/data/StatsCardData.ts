import { StaticImageData } from "next/image";
import teacher from "./../assets/teachers.png";
import classroom from "./../assets/classrooms.png";
import student from "./../assets/students.png";
import course from "./../assets/courses.png";
export type StatsDataType = {
  title: string;
  img: StaticImageData;
  count: number;
  blobColor: string;
  borderRadius: string;
};
export const data: StatsDataType[] = [
  {
    title: "Our Skilled Teachers",
    img: teacher,
    count: 30,
    blobColor: "#2E6AF0",
    borderRadius: "66% 34% 19% 81% / 60% 16% 84% 40% ",
  },
  {
    title: "Currently Enrolled Students",
    img: student,
    count: 7000,
    blobColor: "#00b4d8",
    borderRadius: "25% 75% 19% 81% / 60% 64% 36% 40%  ",
  },
  {
    title: "Current Classes",
    img: classroom,
    count: 14,
    blobColor: "#ff7b00",
    borderRadius: "17% 83% 19% 81% / 31% 14% 86% 69%  ",
  },
  {
    title: "Current Available Courses",
    img: course,
    count: 8,
    blobColor: "#669bbc",
    borderRadius: "42% 58% 67% 33% / 85% 79% 21% 15%   ",
  },
];
