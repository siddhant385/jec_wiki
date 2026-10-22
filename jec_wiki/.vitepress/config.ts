import { defineConfig } from "vitepress";

const githubRepo = "https://github.com/siddhant385/jec_wiki";

export default defineConfig({
  title: "JEC Wiki",
  description:
    "A community-driven knowledge base for students of Jabalpur Engineering College, Jabalpur.",

  lang: "en-US",
  lastUpdated: true,

  themeConfig: {
    logo: undefined,
    siteTitle: "JEC Wiki",

    nav: [
      { text: "Home", link: "/" },
      { text: "Academics", link: "/Academics/" },
      { text: "Newbie Guide", link: "/NewbieDoubts/" },
      {
        text: "Campus Life",
        items: [
          { text: "Clubs & Societies", link: "/Clubs%20and%20Societies/" },
          { text: "Exams & Attendance", link: "/Exams%20and%20Attendence" },
        ],
      },
      {
        text: "Contribute",
        link: `${githubRepo}/issues`,
      },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Beginners Guide", link: "/Beginners%20Guide" },
          { text: "Newbie Doubts", link: "/NewbieDoubts/" },
        ],
      },
      {
        text: "Academics",
        collapsed: false,
        items: [
          { text: "Overview", link: "/Academics/" },
          {
            text: "Syllabus",
            link: "/Academics/Syllabus%20-%20Jabalpur%20Engineering%20College,%20Jabalpur",
          },
          {
            text: "Scheme",
            link: "/Academics/Scheme%20-%20Jabalpur%20Engineering%20College,%20Jabalpur",
          },
          {
            text: "Academic Calendar",
            link: "/Academics/Academic%20Calendar%20-%20Jabalpur%20Engineering%20College,%20Jabalpur",
          },
          {
            text: "Exams & Attendance",
            link: "/Exams%20and%20Attendence",
          },
        ],
      },
      {
        text: "Campus Life",
        items: [
          {
            text: "Clubs & Societies",
            link: "/Clubs%20and%20Societies/",
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: `${githubRepo}/edit/main/jec_wiki/:path`,
      text: "Edit this page on GitHub",
    },

    socialLinks: [
      {
        icon: "github",
        link: githubRepo,
      },
    ],

    footer: {
      message: "Built by :heart:, for the JEC community.",
      copyright: "Community-maintained · Not an official college website",
    },
  },
});
