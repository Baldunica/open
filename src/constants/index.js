  import {
    dedust_logo,
    dyor_logo,
    minter,
    ston,
    tonviewer
  } from '../assets';
  import {
    marketplace,
    openconnect,
    openviewer,
    openwallet,
  } from '../assets'
  
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "roadmap",
      title: "Roadmap",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "TON minter",
      icon: minter,
      link:'https://minter.ton.org/jetton/EQDf84FT8tdHZeI2-LXdb8gPMRqHRSABrmi8jI7MzvVpGJKZ',
    },
    {
      title: "TonViewer",
      icon: tonviewer,
      link:'https://tonviewer.com/EQDf84FT8tdHZeI2-LXdb8gPMRqHRSABrmi8jI7MzvVpGJKZ'
    },
    {
      title: "DeDust",
      icon: dedust_logo,
      link:'https://dedust.io/swap/TON/OPEN/',
    },
    {
      title: "DYOR",
      icon: dyor_logo,
      link:'https://dyor.io/ru/token/EQDf84FT8tdHZeI2-LXdb8gPMRqHRSABrmi8jI7MzvVpGJKZ',
    },
    {
      title: "STON",
      icon: ston,
      link:'https://app.ston.fi/swap?chartVisible=false&ft=TON',
    },
  ];

  const experiences = [
    {
      title: "OpenViewer",
      icon: openviewer,
      iconBg: "#383E56",
      date: "Done",
      link:'https://viewer.openproject.app/',
      points: [
        " An extensive explorer tailored to support various features specifically designed for OpenCoin cryptocurrency.",
        " OpenViewer boasts an intuitive user interface, facilitating seamless navigation through the OpenCoin blockchain, thereby enhancing user experience and efficiency.",
        " Allows for the integration of additional functionalities and modules, catering to the diverse needs of both seasoned cryptocurrency enthusiasts and newcomers alike.",
      ],
    },
    {
      title: "OpenConnect",
      icon: openconnect,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - May 2024",
      points: [
        "OpenConnect serves as a comprehensive system designed to seamlessly connect the $OPEN coin with various external services, ensuring smooth interoperability within the cryptocurrency ecosystem.",
        " In addition to its connectivity features, OpenConnect facilitates secure and efficient payments using the $OPEN coin, offering users a convenient way to transact across different platforms and services with ease.",
        "OpenConnect enhances accessibility for users, fostering greater adoption and utility for the cryptocurrency within the broader digital landscape.",
      ],
    },
    {
      title: "OpenWallet",
      icon: openwallet,
      iconBg: "#E6DEDD",
      date: "Apr 2024 - May 2024",
      points: [
        "OpenWallet stands out as a non-custodial solution, ensuring that users retain full control and ownership of their OpenCoin assets. This decentralized approach enhances security by eliminating the risks associated with centralized storage systems.",
        "With OpenWallet, users can enjoy enhanced privacy as they manage their OpenCoin holdings independently, without relying on third-party services to safeguard their sensitive financial information.",
        ": OpenWallet offers cross-platform compatibility, allowing users to access their OpenCoin holdings from various devices and operating systems.",
      ],
    },
    {
      title: "Marketplace",
      icon: marketplace,
      iconBg: "#E6DEDD",
      date: "May 2024 - Jun 2024",
      points: [
        " The Marketplace powered by $OPEN coin facilitates the buying and selling of a wide range of digital goods, including but not limited to digital art, software licenses, ebooks, and more, creating a vibrant ecosystem for digital content creators and consumers.",
        "Utilizing the $OPEN coin for payments ensures secure and transparent transactions within the Marketplace.",
        "Marketplace empowers content creators to monetize their creations directly, bypassing traditional intermediaries and retaining a larger share of their earnings, fostering a more equitable and sustainable economy for digital content distribution.",
      ],
    },
    {
      title: "P2P Market",

      icon: openviewer,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  export { navLinks,services, experiences };