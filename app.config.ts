export default defineAppConfig({
  docus: {
    title: "Tricked Docs",
    description: "Find info about things i make here.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "trickeddev",
      github: "tricked-dev",
      ko_fi: {
        label: "Ko-Fi",
        icon: "simple-icons:kofi",
        href: "https://ko-fi.com/tricked",
      },
    },
    github: {
      dir: "./content",
      branch: "main",
      repo: "docs",
      owner: "tricked-dev",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
});
