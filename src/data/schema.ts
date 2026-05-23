export const siteUrl = "https://jason-riley.vercel.app";

const heroImage = `${siteUrl}/images/photos/jason-riley-hero-headshot-desktop.png`;
const bookUrl = `${siteUrl}/book`;
const speakingUrl = `${siteUrl}/coaching`;
const bookSalesUrl =
  "https://www.lulu.com/shop/jason-riley/taming-mad-dog/paperback/product-v625mk.html";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Jason Riley",
      url: siteUrl,
      inLanguage: "en-CA",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Jason Riley Speaking & Coaching",
      url: siteUrl,
      logo: `${siteUrl}/images/brand/logo-mark.svg`,
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      sameAs: [
        "https://www.cflaa.ca/board-of-directors/",
        "https://marauders.ca/sports/football/roster/coaches/jason-riley/923",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jason Riley",
      alternateName: "Mad Dog",
      url: siteUrl,
      image: heroImage,
      jobTitle: ["Speaker", "Football Coach", "Author"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of British Columbia",
      },
      award: [
        "1986 Grey Cup Champion",
        "1989 CFL All-Star",
        "CFL East All-Star: 1986, 1988, 1989, 1992",
      ],
      knowsAbout: [
        "Football",
        "Youth empowerment",
        "Anti-bullying",
        "Resilience",
        "Physical literacy",
        "Team culture",
      ],
      sameAs: [
        "https://www.cflaa.ca/board-of-directors/",
        "https://marauders.ca/sports/football/roster/coaches/jason-riley/923",
      ],
    },
    {
      "@type": "Book",
      "@id": `${bookUrl}/#book`,
      name: "Taming Mad Dog",
      url: bookUrl,
      sameAs: bookSalesUrl,
      image: `${siteUrl}/images/photos/book-taming-mad-dog-cover.jpg`,
      author: {
        "@id": `${siteUrl}/#person`,
      },
      isbn: "9781738031108",
      numberOfPages: 310,
      bookFormat: "https://schema.org/Paperback",
      datePublished: "2023-08-15",
      inLanguage: "en",
      about: [
        "Football",
        "Bullying prevention",
        "Mental health",
        "Resilience",
        "Purpose",
      ],
    },
    {
      "@type": "Service",
      "@id": `${speakingUrl}/#speaking-service`,
      name: "Speaking, Coaching, and Football Clinics",
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      url: speakingUrl,
      serviceType: "Speaking, coaching, clinics, book events, and youth programs",
      areaServed: "Canada",
      audience: [
        "Schools",
        "Sport organizations",
        "Community programs",
        "Football teams",
      ],
    },
  ],
};
