import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Company Profile Dimsum Mini By.jose",
    desc: "Website company profile untuk Dimsum Mini By.jose yang menampilkan katalog produk dimsum, sejarah perusahaan, galeri foto, serta informasi kontak dan lokasi outlet. Pengunjung dapat melihat detail produk, harga, dan melakukan pemesanan melalui WhatsApp.",
    link: "https://dim-min-com-pro.vercel.app/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Undangan Pernikahan Digital",
    desc: "Aplikasi undangan pernikahan digital yang memungkinkan pasangan membuat undangan interaktif dengan detail acara, galeri foto, peta lokasi, RSVP online, dan fitur ucapan tamu. Undangan dapat dibagikan melalui link dan mudah diakses di berbagai perangkat.",
    link: "https://misyesinviteu.vercel.app/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Company Profile Cimol Bawang Garut AA Ayang",
    desc: "Website profil bisnis Cimol Bawang Garut AA Ayang yang menampilkan deskripsi produk cimol bawang, keunggulan, testimoni pelanggan, galeri foto, serta informasi pemesanan dan kontak WhatsApp untuk reseller maupun pembeli langsung.",
    link: "https://cbg-profile.vercel.app/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Technical test Frontend Engineer | New York Times Search",
    desc: "Aplikasi pencarian artikel New York Times yang dibangun untuk technical test Frontend Engineer. Fitur meliputi pencarian berdasarkan kata kunci, filter tanggal, tampilan hasil artikel dengan judul, ringkasan, dan link ke sumber asli, serta pagination untuk navigasi hasil.",
    link: "https://nytimes-search.vercel.app/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
