import { CourseMobileSidebar } from "@/app/(course)/courses/[courseId]/_components/course-mobile-sidebar";
import { NavbarRotues } from "@/components/navbar-routes";
import { Chapter, Course, UserProgress } from "@prisma/client";

interface CourseNavbarProps {
  Course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseNavbar = ({ Course, progressCount }: CourseNavbarProps) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <CourseMobileSidebar Course={Course} progressCount={progressCount} />
      <NavbarRotues />
    </div>
  );
};
