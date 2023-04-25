export const SidebarItems = [
  {
    title: "Candidates",
    subItems: [
      { title: "All", linkTo: "/candidates/all" },
      { title: "Recent Applications", linkTo: "/applications/recent" },
      { title: "Unassigned", linkTo: "/candidates/unassigned" },
      { title: "Per Firm", linkTo: "/candidates/perFirm" },
    ],
  },
  {
    title: "Trainings",
    subItems: [
      { title: "Add Training", linkTo: "/training/create" },
      { title: "Manage Trainings", linkTo: "/training/manage" },
    ],
  },
  {
    title: "Exams",
    subItems: [
      { title: "Add Exam", linkTo: "/exam/create" },
      { title: "Manage Exams" },
      { title: "Exams Calendar" },
    ],
  },
  {
    title: "Qualifications",
    linkTo: "/qualifications",
  },
  {
    title: "Firms",
    linkTo: "/firms",
  },
  {
    title: "Rooms",
    linkTo: "/rooms",
  },
  {
    title: "Users",
  },
  {
    title: "Reports",
    subItems: [
      { title: "Candidates" },
      { title: "Trainings" },
      { title: "Exams" },
      { title: "Firms" },
    ],
  },
];
