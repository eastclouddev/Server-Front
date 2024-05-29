import type { Section } from "@/generated/api/@types";

// generated/api/@types/index.tsのCourseDetailResponseBodyが修正されたら下記は削除
type Video ={
    video_url: string;
    thumbnail_url: string;
}

export type CourseDetail = {
    course_id: number | undefined;
    title: string | undefined;
    description: string | undefined;
    level: string;
    duration: number;
    video: Video;
    sections: Section[] | undefined;
};